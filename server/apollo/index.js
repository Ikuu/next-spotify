const { gql } = require('apollo-server-express');
const { artistSearch, related } = require('./resolvers');

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
    artistSearch,
  },
  Artist: {
    related,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
