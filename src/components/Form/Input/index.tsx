import React, { InputHTMLAttributes, useState } from 'react'
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInput> = ({ label, name, icon: Icon, ...rest }) => {
  const [value, setValue] = useState("");
  const [hasInputError, setHasInputError] = useState(false);

  return (
    <div className={styles.container}>
      {label && (<label htmlFor={name}>{label}</label>)}
      <div className={`${styles.content} ${hasInputError ? styles.inputError : ''}`}>
        {Icon && <Icon size={20} />}
        <input
          name={name}
          {...rest}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={e => setHasInputError(!e.target.value)}
        />
      </div>
    </div>
  )
};

export default Input;
