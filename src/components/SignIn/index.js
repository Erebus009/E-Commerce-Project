import React, { Component } from "react";
import "./style.scss";
import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import FormInput from "../Forms/FormInput";
import Authwrapper from "../AuthWrapper";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;

    const configAuthWrapper = {
      headline: "Login"
    }

    return (
      <Authwrapper {...configAuthWrapper}>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={this.handleChange}
          />
          <Button type="submit">Log in</Button>
          <div className="socialIcons">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </div>
          <div className="Links">
            <Link to="/recover">
              Forgot Password?
            </Link>

          </div>
        </form>
      </Authwrapper>
    );
  }
}
export default SignIn;
