import { useState } from "react";
import styles from "./styles.module.scss";

export function InputIcon({iconComponent, type, ...rest }) {
  const [value, setValue] = useState();

  return (
    <div className={styles.container}>
      {/* <div className={`${styles.iconLeft} ${styles.invalidIcon}`}> */}
      <div className={`${styles.iconLeft}`}>
        {iconComponent}
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // className={`${styles.input} ${styles.invalid}`}
        className={`${styles.input}`}
        {...rest}
      />
    </div>
  );
}
