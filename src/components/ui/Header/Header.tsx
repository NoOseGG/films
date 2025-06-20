import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { PATHS } from "../../../constants/constants";
import { TOP_MENU } from "../../../utils/utils";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink to={PATHS.home}>
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} alt='logo' />
          Films
        </div>
      </NavLink>
      <div className={styles.menu}>
        {TOP_MENU.map(item => (
          <NavLink
            className={styles.menuLink}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "inherit",
              };
            }}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
