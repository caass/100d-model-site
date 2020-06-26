import React, { FC } from 'react';

import { SpectrumAxis, SpectrumAxisGroup, isGroup } from './axes';
import { SingleAxis } from './single-axis';
import { AxisGroup } from './axis-group';

export const Likert: FC<SpectrumAxis | SpectrumAxisGroup> = (props) => {
  if (isGroup(props)) {
    const { label, description, axes } = props;
    return <AxisGroup label={label} description={description} axes={axes} />;
  }

  const { shortName, longName, description, endpoints } = props;
  return (
    <SingleAxis
      shortName={shortName}
      longName={longName}
      description={description}
      endpoints={endpoints}
    />
  );
};

export { axes, isGroup } from './axes';
