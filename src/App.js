import React, { useEffect } from "react";

import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Recover from "./pages/Recover";
import HomePageLayout from "./layouts/HomePageLayout";
import DashBaord from "./pages/Dashboard";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";

import { auth, handleUserProfile } from "./firebase/utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import WithAuth from "./hoc/withAuth";


const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListner = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    })

      return () => {
        authListner();
      };
    
    }, []);

    return (
      <div className="App">
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route
              exact
              path="/signup"
              element={
                <HomePageLayout>
                  <SignUp />
                </HomePageLayout>
              }
            />
            <Route
              exact
              path="/login"
              element={
                
                <HomePageLayout>
                  <Login />
                </HomePageLayout>
               
               
               
                
              }
                
            />
            <Route
              exact
              path="/recover"
              element={
                <HomePageLayout>
                  <Recover />
                </HomePageLayout>
              }
            />
            <Route exact path="/dashboard" element = {
              <WithAuth>
            <HomePageLayout>
              <DashBaord />
            </HomePageLayout>
            </WithAuth>
            }/>
          </Routes>
        </div>
      </div>
    );
  }
            

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispacth) => ({
  setCurrentUser: (user) => dispacth(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
