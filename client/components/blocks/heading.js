import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  level: PropTypes.number,
  children: PropTypes.string.isRequired,
};

function Heading(props) {
  const {
    level = 1,
    children,
  } = props;

  return React.createElement(
    `h${level}`,
    null,
    children,
  );
}

Heading.propTypes = propTypes;

export default Heading;
