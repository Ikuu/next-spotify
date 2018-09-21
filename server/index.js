const { ApolloServer } = require('apollo-server-express');
const compression = require('compression');
const express = require('express');
const next = require('next');
const apolloSettings = require('./apollo');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();
const apolloServer = new ApolloServer({
  ...apolloSettings,
  introspection: true,
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.use(cors({}));
    server.get('/artist/:artist', (req, res) => {
      const actualPage = '/index';
      const queryParams = { artist: req.params.artist };

      app.render(req, res, actualPage, queryParams);
    });
    apolloServer.applyMiddleware({ app: server, path: '/graphql/apollo' });
    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, () => console.log('> Ready on http://localhost:3000'));
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
