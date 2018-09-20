import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Image extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    naturalHeight: PropTypes.number.isRequired,
    naturalWidth: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const {
      alt, bgColor, naturalHeight, naturalWidth, src,
    } = this.props;
    const containerStyle = {
      backgroundColor: bgColor,
      paddingBottom: `${(naturalHeight / naturalWidth) * 100}%`,
      position: 'relative',
    };
    const imgStyle = {
      position: 'absolute',
      width: '100%',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div style={containerStyle}>
        <img style={imgStyle} src={src} alt={alt} />
      </div>
    );
  }
}
