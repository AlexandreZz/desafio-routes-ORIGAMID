import React from "react";
import styles from "../modules/Styles.module.css";
import foto from "../img/datilografia.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.container} ${styles.contato} animaLeft`}>
      <Head title="Ranek | Contato" description="Página de contato" />
      <img
        className={styles.one}
        src={foto}
        alt="datilografia"
        title="datilografia"
      />
      <div className={styles.two}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>andre@origamid.com</li>
          <li>9999-9999</li>
          <li>Rua Ali Perto,999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
