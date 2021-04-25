import React from "react";
import FilterNames from "../FilterNames";

import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="filter">
        <FilterNames />
      </div>
    </nav>
  );
}
export default Nav;
