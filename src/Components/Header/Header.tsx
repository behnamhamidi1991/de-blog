import React from "react";
import { Link } from "react-router-dom";
import "./headerstyle.css";

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <h1 className="logo">my blog</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>{" "}
          <li>
            <Link to="/blog">blog</Link>
          </li>{" "}
          <li>
            <Link to="/error">error</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
