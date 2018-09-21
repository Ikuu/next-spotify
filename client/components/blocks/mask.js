import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Mask extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  };

  render() {
    const {
      children,
      height = 'auto',
      width = 'auto',
    } = this.props;
    const maskStyles = {
      borderRadius: '50%',
      height,
      overflow: 'hidden',
      position: 'relative',
      width,
    };

    return (
      <div style={maskStyles}>
        {children}
      </div>
    );
  }
}
