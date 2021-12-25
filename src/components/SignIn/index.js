import React, { useState, useEffect } from "react";
import "./style.scss";
import Button from "../Forms/Button";
import { signInWithGoogle} from "./../../firebase/utils";
import FormInput from "../Forms/FormInput";
import Authwrapper from "../AuthWrapper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "./../../redux/user/user.actions"


const mapState = ({ user}) => ({
  signInSuccess: user.signInSuccess
})



const SignIn = props => {
  const { signInSuccess } = useSelector(mapState)
  const dispatch = useDispatch()
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  useEffect(() => {
    if(signInSuccess){
      resetForm()
      window.location.assign("http://localhost:3000")

    }
  }, [signInSuccess])

  const resetForm = () => {
    SetEmail('')
    SetPassword('')
  }

  const handleSubmit = (e) => {
    
     e.preventDefault();
    dispatch(signInUser({email,password}));
    
  }

    
  
  const configAuthWrapper = {
    header: "Login"
  }
  

    return (
      <Authwrapper {...configAuthWrapper}>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => SetEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => SetPassword(e.target.value)}
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

export default SignIn;
