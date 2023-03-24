import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logoImage} alt="logo" height={30} width={30} />
      </Link>
      <nav>
        <ul className="headerNavList">
          <li className="headerNavItem">
            <NavLink to={"/"} className="headerNavLink">
              Home
            </NavLink>
          </li>
          <li className="headerNavItem">
            <NavLink to={"/projects"} className="headerNavLink">
              Projects
            </NavLink>
          </li>
          <li className="headerNavItem">
            <NavLink to={"/about"} className="headerNavLink">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
