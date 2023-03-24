import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../images/logo.png";
import css from "./components.module.css";

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src={logoImage} alt="logo" height={30} width={30} />
      </Link>
      <nav>
        <ul className={css.headerNavList}>
          <li className={css.headerNavItem}>
            <NavLink to={'/'} className={css.headerNavLink}>
              Home
            </NavLink>
          </li>
          <li className={css.headerNavItem}>
            <NavLink to={'/projects'} className={css.headerNavLink}>
              Projects
            </NavLink>
          </li>
          <li className={css.headerNavItem}>
            <NavLink to={'/about'} className={css.headerNavLink}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
