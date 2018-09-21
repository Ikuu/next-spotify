import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    ariaLabel: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  render() {
    const {
      ariaLabel,
      color = 'white',
      disabled = false,
      onClick,
      text,
      type = 'button',
    } = this.props;
    const textColor = {
      black: 'white',
      red: 'white',
      white: 'black',
    };
    const styles = {
      backgroundColor: color,
      color: textColor[color],
      cursor: 'pointer',
    };

    return (
      <button
        aria-label={ariaLabel || text}
        disabled={disabled}
        onClick={event => onClick(event)}
        style={styles}
        type={type}
      >
        {text}
      </button>
    );
  }
}
