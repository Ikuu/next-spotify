const { GraphQLObjectType, GraphQLString } = require('graphql');
const ExternalUrls = require('./ExternalUrls');

const SimplifiedArtist = new GraphQLObjectType({
  name: 'SimplifiedArtist',
  description: '...',

  fields: () => ({
    external_urls: { type: ExternalUrls },
    href: { type: GraphQLString },
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    uri: { type: GraphQLString },
  }),
});

module.exports = SimplifiedArtist;
