import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layouts';

class Index extends PureComponent {
  static getInitialProps = async ({ req }) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/artist/drake`);
    const json = await res.json();

    return {
      artist: json.items[0],
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
