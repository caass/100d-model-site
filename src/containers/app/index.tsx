import React, { FC } from 'react';
import styles from './styles.module.css';
import { Quiz } from '../quiz';

export const App: FC = () => {
  return (
    <div className={styles['app-wrapper']}>
      <Quiz />
    </div>
  );
};
