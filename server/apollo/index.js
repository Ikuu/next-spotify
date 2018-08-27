const { gql } = require('apollo-server-express');
const grabToken = require('../utils/grabToken');
const { API_URL } = require('../config');

exports.typeDefs = gql`
  type Query {
    me: User
    spot(artist: String!, limit: Int): ArtistSearchResult
  }

  type User {
    username: String!
  }

  type Artist {
    name: String
    href: String
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

exports.resolvers = {
  Query: {
    me: () => ({
      username: 'Robin',
    }),
    spot: (obj, { artist, limit }) =>
      grabToken().then(token =>
        fetch(`${API_URL}/search?q=${artist}&type=artist&limit=${limit || 5}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(json => json.artists)),
  },
};
