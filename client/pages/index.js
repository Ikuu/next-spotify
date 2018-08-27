import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layouts';
import Artist from '../components/artist';

class Index extends React.Component {
  static getInitialProps = (ctx) => {
    const { artist } = ctx.query;

    return {
      artist,
    };
  };

  static propTypes = {
    artist: PropTypes.string.isRequired,
  };

  static defaultProps = {
    artist: 'asap',
  };

  render() {
    const { artist } = this.props;

    return (
      <Layout>
        <Artist artist={artist} />
      </Layout>
    );
  }
}

export default Index;
