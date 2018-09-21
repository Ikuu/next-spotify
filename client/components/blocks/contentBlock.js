import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Block extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    heading: PropTypes.node.isRequired,
    media: PropTypes.node,
  };

  render() {
    const { children, heading, media } = this.props;

    return (
      <div>
        {heading}
        {media}
        {children}
      </div>
    );
  }
}
