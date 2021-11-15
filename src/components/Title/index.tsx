import React from 'react'
import styles from './styles.module.scss';

const Title: React.FC = ({ children }) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
};

export default Title;
