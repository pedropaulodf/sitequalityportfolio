import { useState } from "react";
import styles from "./styles.module.scss";

export function Input({ type, label = "", ...rest }) {
  return (
    <div className={styles.container}>
      {type === "textarea" ? (
        <>
          <label>{label}</label>
          <textarea
            className={`${styles.input} ${rest.error && styles.invalid}`}
            {...rest}
          ></textarea>
        </>
      ) : (
        <>
          <label>{label}</label>
          <input
            type={type}
            className={`${styles.input} ${rest.error && styles.invalid}`}
            {...rest}
          />
        </>
      )}
    </div>
  );
}
