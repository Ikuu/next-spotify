require('dotenv').config();
const btoa = require('btoa');
const fetch = require('node-fetch');

const { SPOTIFY_CLIENT, SPOTIFY_SECRET } = process.env;
const base64Encoded = btoa(`${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`);

function fetchToken() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${base64Encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  };

  return fetch('https://accounts.spotify.com/api/token', options);
}

module.exports = async function grabToken() {
  const response = await fetchToken();
  const json = await response.json();

  return json.access_token;
};
