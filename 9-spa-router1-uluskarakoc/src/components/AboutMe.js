import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <div className="aboutMe">
      <nav>
        <NavLink className="navItem" to="/me">
          Me
        </NavLink>
        <NavLink className="navItem" to="/hobbies">
          Hobbies
        </NavLink>
        <NavLink className="navItem" to="/contact">
          Contact
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default AboutMe;
