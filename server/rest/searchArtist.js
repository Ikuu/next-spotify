const fetch = require('isomorphic-unfetch');
const grabToken = require('../utils/grabToken');

module.exports = async (req, res) => {
  const token = await grabToken();
  const { artist } = req.params;
  const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;

  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(({ artists }) => res.send(artists));
};
