import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import "./style.scss";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header container.fluid align-items-center d-flex">
      
      <div className="header-title container.fluid">
        <Link to="/" className="title">
          <h1 className="title">Moto Sports</h1>
        </Link>
      </div>
      <div className="signup container d-flex justify-content-end">
      {currentUser && (
       <ul className="signUp">
       <li>
        <span onClick={() => auth.signOut()}>Log Out</span>
         
       </li>
       </ul>
      )}
      {!currentUser && (
        <ul className="signUp">
          <li>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/signup" className="CallSignUp">
              Sign Up
            </Link>
          </li>
        </ul>
     
     )}
      </div>
     </header>
      
  );
};

Header.defaultProps = {
  currentUser: null
};


export default Header;
