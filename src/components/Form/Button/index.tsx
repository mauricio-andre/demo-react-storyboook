import React, { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
  primary?: boolean;
  click: () => void;
}

const Button: React.FC<IButton> = ({ name, type, click, children, primary = true, ...rest }) => {
  return (
    <button
      className={`${styles.buttonClass} ${!primary ? styles.buttonClassSecondary : ''}`}
      onClick={click}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
};

export default Button;
