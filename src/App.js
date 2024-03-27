import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "popper.js/dist/umd/popper.min.js";

import React from "react";
import Hero from "./Hero";
import Catalog from "./Catalog";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Hero />
        <h1>COFFEE</h1>
        <p id="shipping">Free shipping from 35€</p>
        <Catalog />
        <Subscribe />
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
