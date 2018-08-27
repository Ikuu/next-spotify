import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

// Use Fragments rather than writing big query.

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

// export default Artist;
export default graphql(query, {
  options: ({ artist }) => {
    return {
      variables: {
        artist,
        limit: 2,
      },
    };
  },
})(Artist);
