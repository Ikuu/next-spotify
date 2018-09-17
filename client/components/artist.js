import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import PropTypes from 'prop-types';

const query = gql`
  query artistSearch($artist: String!, $limit: Int) {
    artists(artist: $artist, limit: $limit) {
      items {
        name
        images {
          url
        }
        related {
          id
          name
        }
      }
    }
  }
`;

function Artist({ data: { artists } }) {
  const artist = artists.items[0];
  const { name, related, images } = artist;

  return (
    <div>
      <h1>{name}</h1>
      <img src={images[0].url} alt={name} />

      <h2>Related</h2>
      <ul>
        {related.map(r => (
          <li key={r.id}>
            <Link href={`/index?artist=${r.name}`} as={`/artist/${r.name}`}>
              <a>{r.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Artist.propTypes = {
  data: PropTypes.shape({
    artists: PropTypes.shape({
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
