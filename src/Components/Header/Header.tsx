import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
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
    </header>
  );
}

export default Header;
