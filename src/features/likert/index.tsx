import React, { FC } from "react";

const Likert: FC<{ label: string; shortName: string }> = ({ label }) => {
  return (
    <div>
      <span>{label}</span>
    </div>
  );
};

export default Likert;
