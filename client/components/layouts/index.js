import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Next.js Spotify App</title>
        <meta name="description" content="Next.js Spotify App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#191414" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>

      {children}
    </div>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
