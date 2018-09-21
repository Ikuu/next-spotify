import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Figure extends PureComponent {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const {
      caption,
      children = null,
    } = this.props;

    if (!children) return null;

    return (
      <figure>
        {children}
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}
