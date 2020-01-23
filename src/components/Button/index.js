import React from 'react';
import './style.scss';

const Button = function({label = 'Default label'}){
  return (
    <button>{label}</button>
  );
}

export default Button;
