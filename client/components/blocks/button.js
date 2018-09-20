import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    const {
      ariaLabel,
      color = 'white',
      disabled = false,
      onClick,
      text,
      type = 'button'
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
    )
  }
};
