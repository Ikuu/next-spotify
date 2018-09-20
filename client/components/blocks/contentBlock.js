import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Block extends PureComponent {
  static propTypes = {
    heading: PropTypes.node.isRequired,
    media: PropTypes.node.isRequired,
  };

  render() {
    const { children, heading, media } = this.props;

    return (
      <div>
        {heading}
        {media}
        {children}
      </div>
    )
  }
}
