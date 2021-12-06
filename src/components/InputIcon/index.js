import { useState } from "react";
import styles from "./styles.module.scss";

export function InputIcon({iconComponent, type, ...rest }) {
  const [value, setValue] = useState();

  return (
    <div className={styles.container}>
      <div className={`${styles.iconLeft} ${rest.error && styles.invalidIcon}`}>
        {iconComponent}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles.input} ${rest.error && styles.invalid}`}
        {...rest}
      />
    </div>
  );
}
