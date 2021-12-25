import React, { useState } from "react";
import "./style.scss";
import Authwrapper from "../AuthWrapper";
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";
import { auth } from "./../../firebase/utils";



const EmailPassword = props =>  {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])



 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          window.location.assign("http://localhost:3000/login");
        })
        .catch(() => {
          const err = ["Email not found. Please try again"];
          setErrors(
            err
          );
          setTimeout(() => {
            setErrors([])
          }, 3000)
        });
    } catch (err) {
      console.log(err);
    }
  };

 

    const configAuthWrapper = {
      headline: "Password Recovery",
    };

    return (
      <Authwrapper {...configAuthWrapper}>
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
        <div className="formWrap">
       

          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={e => setEmail(e.target.value)}
            />
            <Button type="submit">Password Recovery</Button>
          </form>
        </div>
      </Authwrapper>
    );
  }


export default EmailPassword;
