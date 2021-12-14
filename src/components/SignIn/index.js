import React, { Component } from "react";
import "./style.scss";
import Button from "../Forms/Button";
import { signInWithGoogle } from "./../../firebase/utils";

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signIn">
        <div className="wrapper">
          <h2>Login</h2>
          <div className="formWrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="socialIcons">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
