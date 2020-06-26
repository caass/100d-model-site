import React, { FC } from 'react';
import { Likert, axes, isGroup } from '../../features/likert';
import styles from './styles.module.css';

export const Quiz: FC = () => {
  return (
    <div className={styles['quiz-body']}>
      {axes.map((props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Likert {...props} key={isGroup(props) ? props.label : props.shortName} />
      ))}
    </div>
  );
};
