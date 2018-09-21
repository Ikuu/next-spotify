import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Figure extends PureComponent {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { caption, children } = this.props;

    return (
      <figure>
        {children}
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}
