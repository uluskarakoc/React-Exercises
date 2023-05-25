import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Parent() {
  return (
    <>
      <nav>
        <NavLink className="navs" to="/"> Home</NavLink>
        <NavLink className="navs" to="/one"> ChildOne</NavLink>
        <NavLink className="navs"  to="/two"> ChildTwo</NavLink>
        <NavLink className="navs" to="/three"> LastChild</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Parent;
