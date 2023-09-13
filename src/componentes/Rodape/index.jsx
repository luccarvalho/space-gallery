import React from "react";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href='https://github.com/luccarvalho'
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        <a
          href='http://www.linkedin.com/in/lucasalexandrecarvalho'
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" />
        </a>
      </div>
      <p>&copy; Desenvolvido por Lucas Carvalho</p>
    </footer>
  );
}
