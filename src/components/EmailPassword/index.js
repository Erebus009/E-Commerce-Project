import React, { Component } from "react";
import "./style.scss";
import Authwrapper from "../AuthWrapper";
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";
import { auth } from "./../../firebase/utils";

const initialState = {
  email: "",
  errors: ""
};

class EmailPassword extends Component {
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
    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          window.location.assign("http://localhost:3000/login");
        })
        .catch(() => {
          const err = ["Email not found."];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, errors } = this.state;

    const configAuthWrapper = {
      headline: "Password Recovery",
    };

    return (
      <Authwrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((e,index) => {
                return (
                <li key={index}>
                  {e}
                </li>
                )
              })}
            </ul>
          )}

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Password Recovery</Button>
          </form>
        </div>
      </Authwrapper>
    );
  }
}

export default EmailPassword;
