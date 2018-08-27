import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layouts';

// Use Fragments rather than writing big query.

class Index extends PureComponent {
  static getInitialProps = async ({ req }) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/artist/a`);
    const { items } = await res.json();

    return {
      artist: items[0],
    };
  }

  static propTypes = {
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    artist: {
      name: 'Artist Name',
    },
  }

  render() {
    const { artist } = this.props;

    return (
      <Layout>
        <h1>{artist.name}</h1>
      </Layout>
    );
  }
}

export default Index;
