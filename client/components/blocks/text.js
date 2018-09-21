import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children } = this.props;

    return <p>{children}</p>;
  }
}
