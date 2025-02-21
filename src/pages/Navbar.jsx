import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.title}>
        Times<span>NZ</span>
      </div>
      <div className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/LatestNews">Latest News</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
