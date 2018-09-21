import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Audio, Heading, Image, Mask } from './blocks';

const query = gql`
  query artistSearch($artist: String!, $limit: Int) {
    artists(artist: $artist, limit: $limit) {
      items {
        name
        images {
          height
          url
          width
        }
        related {
          id
          name
        }
        tracks {
          id
          name
          preview_url
        }
      }
    }
  }
`;

function Artist({ data: { artists } }) {
  const artist = artists.items[0];
  const {
    name, related, images, tracks,
  } = artist;

  return (
    <div>
      <Heading>{name}</Heading>
      <Mask height={320} width={320}>
        <Image
          alt={name}
          naturalHeight={images[0].height}
          naturalWidth={images[0].width}
          src={images[0].url}
        />
      </Mask>

      <Heading level={2}>Top Tracks</Heading>
      <ul>
        {tracks.map(t => (
          <li key={t.id}>
            {t.name}
            {t.preview_url !== null ? <Audio src={t.preview_url} /> : ''}
          </li>
        ))}
      </ul>

      <Heading level={2}>Related</Heading>
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
