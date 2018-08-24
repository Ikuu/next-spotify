const fetch = require('isomorphic-unfetch');
const grabToken = require('./utils/grabToken');

module.exports = (req, res) => {
  grabToken().then(token =>
    fetch(`https://api.spotify.com/v1/search?q=${req.params.artist}&type=artist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(json => json.artists)
      .then(json => res.send(json)));
};
