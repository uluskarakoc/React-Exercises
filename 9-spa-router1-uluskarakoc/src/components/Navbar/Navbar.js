import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
const inlineCss = {
  margin: "6.7rem 0rem 0rem 1rem",
};
function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.navItem}>Me</NavLink>{" "}
      <span style={inlineCss}>{" | "}</span>
      <NavLink to="/hobbies" className={styles.navItem}>
        Hobbies
      </NavLink>
      <span style={inlineCss}>{" | "}</span>
      <NavLink to="/contact" className={styles.navItem}>
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;
