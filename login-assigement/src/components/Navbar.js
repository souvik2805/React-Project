import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Nav Component</h2>
      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/lifecycle">
          <li>React lifecycle</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
