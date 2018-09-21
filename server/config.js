const API_URL = 'https://api.spotify.com/v1';
const setHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

module.exports = {
  API_URL,
  setHeaders,
};

