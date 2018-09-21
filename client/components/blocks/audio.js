import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Audio extends PureComponent {
  static propTypes = {
    controls: PropTypes.bool,
    src: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  render() {
    const {
      controls = true,
      src,
      type = 'audio/mp3',
    } = this.props;

    return (
      /* eslint-disable jsx-a11y/media-has-caption */
      <audio controls={controls}>
        <source src={src} type={type} />

        Your browser does not support the Audio element.
      </audio>
    );
  }
}
