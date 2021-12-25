import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { useSelector } from "react-redux"
import "./style.scss";


const mapState = ({user}) => ({
  currentUser: user.currentUser
})

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  return (
    <header className="header container.fluid align-items-center d-flex">
      
      <div className="header-title container.fluid">
        <Link to="/" className="title">
          <h1 className="title">Moto Sports</h1>
        </Link>
      </div>
      <div className="signUp container d-flex justify-content-end">
      {currentUser && (
       <ul className="signUp">
       <li>
        <span onClick={() => auth.signOut()}>Log Out</span>
       
        <Link to="/dashboard" className="Dashboard">
              Dashboard
          </Link>
        
       </li>
       
       </ul>
      )}
      {!currentUser && (
        <ul className="signUp">
          <li>
          <Link to="/dashboard" className="Dashboard">
              Dashboard
            </Link>
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



export default Header
