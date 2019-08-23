import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Counter App
        <span className="badge badge-pill badge-secondary m-4">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
