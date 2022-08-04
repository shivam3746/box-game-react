import React, { PureComponent } from 'react';

//Create a stateless Button Component
export default class Button extends PureComponent {
  render() {
    const {
      onClick,
      type,
      bsClass,
      children,
    } = this.props;
    return (
      <button
        type={type}
        className={bsClass}
        onClick={onClick} 
      >
        {children}
      </button>
    );
  }
}

