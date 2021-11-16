import { useState } from "react";
import styles from "./styles.module.scss";

export function Input({ type, ...rest }) {
  return (
    <div className={styles.container}>
      {type === "textarea" ? (
        <textarea
          className={`${styles.input} ${rest.error && styles.invalid}`}
          {...rest}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`${styles.input} ${rest.error && styles.invalid}`}
          {...rest}
        />
      )}
    </div>
  );
}
