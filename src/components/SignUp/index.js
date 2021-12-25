import React, { useState, useEffect } from "react";
import "./style.scss";
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";
import { useDispatch,useSelector } from "react-redux";

import { signUpUser } from "../../redux/user/user.actions";
import Authwrapper from "../AuthWrapper";


const mapState = ({ user }) => ({
  signUpSuccess : user.signUpSuccess,
  signUpError: user.signUpError
})



const SignUp = (props) => {
  const {signUpError,signUpSuccess} = useSelector(mapState)
  const dispatch = useDispatch()
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

const resetForm = () => {
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setErrors([])
}


useEffect(() => {
  if(signUpSuccess){
    resetForm()
    window.location.assign("http://localhost:3000/")
  }
  
}, [signUpSuccess])

useEffect(() => {
  if(Array.isArray(signUpError) && signUpError.length > 0){
    setErrors(signUpError)
  }
  
}, [signUpError])






  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpUser({
      displayName,
      email,
      password,
      confirmPassword
    }))
    
  }
    

  const configAuthWrapper = {
    headline: "Registration",
  };
  return (
    <Authwrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </Authwrapper>
  );
};

export default SignUp;
