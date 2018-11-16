import React, { Component } from "react";

// this is a stateless functional component
// can't use life cycle hook in statelestt
const NavBar = props => {
  const { totalCounter } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default NavBar;
