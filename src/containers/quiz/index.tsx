import React, { FC } from "react";
import Likert, { axes, isGroup } from "../../features/likert";
import styles from "./styles.module.css";

const Quiz: FC = () => {
  return (
    <div className={styles["quiz-body"]}>
      {axes.map((props) => (
        <Likert
          {...props}
          key={isGroup(props) ? props.label : props.shortName}
        />
      ))}
    </div>
  );
};

export default Quiz;
