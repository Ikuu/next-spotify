import React, { PureComponent } from 'react';

export default class Mask extends PureComponent {
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
