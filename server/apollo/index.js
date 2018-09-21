const { gql } = require('apollo-server-express');
const {
  albums, artistById, artists, related, tracks,
} = require('./resolvers');

const typeDefs = gql`
  type Query {
    artists(artist: String!, limit: Int, country: String): SearchResultArtist
    artistById(id: String!): Artist
  }

  type SimplifiedAlbum {
    artists: [SimplifiedArtist]
    name: String
  }

  type Artist {
    name: String
    href: String
    followers: Followers
    genres: [String]
    id: String
    images: [Image]
    popularity: Int
    related: [Artist]
    uri: String
    tracks: [Track]
    type: String
    albums: [SimplifiedAlbum]
  }

  type SimplifiedArtist {
    href: String
    id: String
    name: String
    type: String
    uri: String
  }

  type Followers {
    href: String
    total: Int
  }

  type Image {
    height: Int
    url: String
    width: Int
  }

  type Track {
    album: [SimplifiedAlbum]
    artists: [SimplifiedArtist]
    available_markets: [String]
    disc_number: Int
    duration_ms: Int
    id: String
    name: String
    preview_url: String
  }

  type SearchResultArtist {
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
    artists,
    artistById,
  },
  Artist: {
    albums,
    related,
    tracks,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
