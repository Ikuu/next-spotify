const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const SimplifiedArtist = require('./SimplifiedArtist');

const SimplifiedAlbum = new GraphQLObjectType({
  name: 'Album',
  description: '...',

  fields: () => ({
    artists: { type: new GraphQLList(SimplifiedArtist) },
    name: { type: GraphQLString },
  }),
});

module.exports = SimplifiedAlbum;
