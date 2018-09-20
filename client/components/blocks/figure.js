import React, { PureComponent } from 'react';

export default class Figure extends PureComponent {
  render() {
    const { caption, children } = this.props;

    return (
      <figure>
        {children}
        <figcaption>{caption}</figcaption>
      </figure>
    )
  }
}
