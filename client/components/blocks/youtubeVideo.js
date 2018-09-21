import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class YoutubeVideo extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    naturalHeight: PropTypes.number.isRequired,
    naturalWidth: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const {
      id, naturalHeight = 9, naturalWidth = 16, title,
    } = this.props;
    const containerStyles = {
      height: 0,
      maxWidth: '100%',
      overflow: 'hidden',
      paddingBottom: `${(naturalHeight / naturalWidth) * 100}%`,
      position: 'relative',
    };
    const iframeStyles = {
      bottom: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    };

    return (
      <div style={containerStyles}>
        <iframe
          title={title}
          style={iframeStyles}
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}
