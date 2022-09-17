import React from "react";
import styles from "../modules/Styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.container} ${styles.cabecalho} animaLeft`}>
      <ul>
        <li>
          <Link to="/" activeclassname="activeH">
            Produtos
          </Link>
        </li>
        <li>
          <Link to="contato" activeclassname="activeH">
            Contato
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
