import React from "react";
import "./index.scss"
import Header from "./components/Header";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <main className="main">
      <Home />
      </main>
    </div>
  );
}

export default App;
