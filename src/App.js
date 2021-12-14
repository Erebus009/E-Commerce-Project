import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Header />
      <div className="main">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
      
      </div>
      
    </div>
    
  );
}

export default App;
