import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = (props) => {
  return (
    <header className="header container.fluid align-items-center d-flex">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="header-title">
        <Link to="/" className="title">
          <h1 className="title">Moto Sports</h1>
        </Link>
      </div>

      <div className="signup">
        <ul>
          <li>
            <Link to="/signup" className="CallSignUp">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
