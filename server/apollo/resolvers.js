const grabToken = require('../utils/grabToken');
const { API_URL, setHeaders } = require('../config');

const artistById = (obj, { id }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/artists/${id}`, setHeaders(token))
      .then(response => response.json()));

const artists = (obj, { artist, limit }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/search?q=${artist}&type=artist&limit=${limit || 5}`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.artists));

const related = ({ id }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/artists/${id}/related-artists`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.artists));

const albums = ({ id }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/artists/${id}/albums`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.items));

const tracks = ({ id, country }) =>
  grabToken().then(token =>
    fetch(`${API_URL}/artists/${id}/top-tracks?country=${country || 'GB'}`, setHeaders(token))
      .then(response => response.json())
      .then(json => json.tracks));

module.exports = {
  albums,
  artistById,
  artists,
  related,
  tracks,
};
