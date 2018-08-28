const { gql } = require('apollo-server-express');
const grabToken = require('../utils/grabToken');
const { API_URL } = require('../config');

const typeDefs = gql`
  type Query {
    artistSearch(artist: String!, limit: Int): ArtistSearchResult
  }

  type Artist {
    name: String
    href: String
    followers: Followers
    related: [Artist]
  }

  type Followers {
    href: String
    total: Int
  }

  type ArtistSearchResult {
    href: String
    limit: Int
    items: [Artist]
    offset: Int
    previous: String
    total: Int
  }
`;

const resolvers = {
  Query: {
    artistSearch: (obj, { artist, limit }) =>
      grabToken().then(token =>
        fetch(`${API_URL}/search?q=${artist}&type=artist&limit=${limit || 5}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(json => json.artists)),
  },
  Artist: {
    related: ({ id }) =>
      grabToken().then(token =>
        fetch(`${API_URL}/artists/${id}/related-artists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(json => json.artists)),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
