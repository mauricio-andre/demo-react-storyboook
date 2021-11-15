import React, { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
  click: () => void;
}

const Input: React.FC<IButton> = ({ name, type, click, children, ...rest }) => {
  return (
    <button
      className={styles.buttonClass}
      onClick={click}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
};

export default Input;
