import React, { FC } from "react";
import styles from "./App.module.css";
import { Quiz } from "./containers";

const App: FC = () => {
  return (
    <div className={styles["app-wrapper"]}>
      <Quiz />
    </div>
  );
};

export default App;
