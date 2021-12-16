import React, { Component } from "react";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./components/Login";
import HomePageLayout from "./layouts/HomePageLayout";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { auth, handleUserProfile } from "./firebase/utils";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  authListner = null;

  componentDidMount() {
    this.authListner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef =  await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListner();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <div className="main">
          
          <Routes>
            <Route
              exact
              path="/"
              element={<Home currentUser={currentUser} />}
            />

            <Route
              exact
              path="/signup"
              element={
                <HomePageLayout currentUser={currentUser}>
                  <SignUp />
                </HomePageLayout>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <HomePageLayout currentUser={currentUser}  >
                  <Login />
                </HomePageLayout>
              }
            />
           
          </Routes>
          
        </div>
      </div>
    );
  }
}

export default App;
