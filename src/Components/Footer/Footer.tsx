import React from "react";
import "./footerstyle.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>{" "}
          <li>
            <Link to="/terms">Terms</Link>
          </li>{" "}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
