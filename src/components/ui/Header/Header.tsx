import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { PATHS } from "../../../constants/constants";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to={PATHS.home}>
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} alt='logo' />
          Films
        </div>
      </Link>
      <div>
        <Link to={PATHS.top100movies}>
          <span className={styles.menuLink}>Топ 100 фильмов</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
