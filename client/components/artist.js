import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const query = gql`
  query artistSearch($artist: String!, $limit: Int) {
    artistSearch(artist: $artist, limit: $limit) {
      items {
        name
      }
    }
  }
`;

function Artist({ data: { artistSearch } }) {
  const artist = artistSearch.items[0];

  return (
    <div>
      <h1>{artist.name}</h1>
    </div>
  );
}

Artist.propTypes = {
  data: PropTypes.shape({
    artistSearch: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default graphql(query, {
  options: ({ artist }) => ({
    variables: {
      artist,
      limit: 1,
    },
  }),
})(Artist);
