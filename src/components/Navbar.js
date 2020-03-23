import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">All Posts</NavLink>
    </nav>
  );
};

export default Navbar;
