import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layouts';

class Index extends PureComponent {
  static getInitialProps = async () => {
    const res = await fetch('http://localhost:3023/api/artist/drake');
    const json = await res.json();

    return {
      artist: json.items[0],
    };
  }

  static propTypes = {
    artist: {
      name: PropTypes.string,
    },
  };

  static defaultProps = {
    artist: {},
  }

  render() {
    const { artist } = this.props;

    return (
      <Layout>
        <h1>Content</h1>
        <p>
          {artist.name}
        </p>
      </Layout>
    );
  }
}

export default Index;
