const grabToken = require('../utils/grabToken');
const { API_URL } = require('../config');

const setHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const artistSearch = (obj, { artist, limit }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/search?q=${artist}&type=artist&limit=${limit || 5}`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.artists));

const related = ({ id }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/artists/${id}/related-artists`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.artists));

module.exports = {
  artistSearch,
  related,
};
