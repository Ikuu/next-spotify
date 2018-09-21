import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layouts';
import Artist from '../components/artist';

class Index extends React.Component {
  static getInitialProps = ({ query }) => {
    const { artist } = query;

    return {
      artist,
    };
  };

  static propTypes = {
    artist: PropTypes.string,
  };

  render() {
    const { artist = 'asap' } = this.props;

    return (
      <Layout>
        <Artist artist={artist} />
      </Layout>
    );
  }
}

export default Index;
