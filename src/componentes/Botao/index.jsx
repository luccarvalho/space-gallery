import React from "react";
import styles from "./Botao.module.scss";

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
