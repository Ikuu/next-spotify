const compression = require('compression');
const express = require('express');
const next = require('next');
const searchArtist = require('./searchArtist');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.get('/api/artist/:artist', searchArtist);
    server.get('*', (req, res) => handle(req, res));

    server.listen(3023, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
