import React, { Component } from "react";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./components/Login";
import Recover from "./pages/Recover"
import HomePageLayout from "./layouts/HomePageLayout";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';

import { auth, handleUserProfile } from "./firebase/utils";
import { connect } from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions"
const initialState = {
  currentUser: null,
};

class App extends Component {
  

  authListner = null;

  componentDidMount() {

    const  { setCurrentUser } = this.props


    this.authListner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef =  await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.authListner();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <div className="main">
          
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />

            <Route
              exact
              path="/signup"
              element={
                <HomePageLayout >
                  <SignUp />
                </HomePageLayout>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <HomePageLayout >
                  <Login />
                </HomePageLayout>
              }
            />
            <Route exact path= "/recover" element={<HomePageLayout  >
            <Recover />
            </HomePageLayout>}/>
          </Routes>
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispacth => ({
  setCurrentUser: user => dispacth(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
