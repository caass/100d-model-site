import React, { FC } from 'react';

import { SpectrumAxisGroup } from './axes';
import { SingleAxis } from './single-axis';

import styles from './styles.module.css';

export const AxisGroup: FC<SpectrumAxisGroup> = ({ label, description, axes }) => (
  <div className={styles['likert-group']}>
    <h4>{label}</h4>
    <span>{description}</span>
    {axes.map(({ shortName, longName, description: axisDescription, endpoints }) => (
      <SingleAxis
        shortName={shortName}
        longName={longName}
        description={axisDescription}
        endpoints={endpoints}
        key={shortName}
      />
    ))}
  </div>
);
