const { ApolloServer } = require('apollo-server-express');
const compression = require('compression');
const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const searchArtist = require('./rest/searchArtist');
const { typeDefs, resolvers } = require('./apollo');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    // server.use(
    //   '/graphql',
    //   graphqlHTTP({
    //     schema,
    //     graphiql: true,
    //   }),
    // );
    server.get('/api/artist/:artist', searchArtist);
    server.get('/:artist', (req, res) => {
      const actualPage = '/index';
      const queryParams = { artist: req.params.artist };

      app.render(req, res, actualPage, queryParams);
    });
    apolloServer.applyMiddleware({ app: server, path: '/graphql/apollo' });
    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
