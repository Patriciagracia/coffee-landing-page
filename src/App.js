import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "popper.js/dist/umd/popper.min.js";

import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Catalog from "./Catalog";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <NavBar />
        <Hero />
        <Catalog />
        <Subscribe />
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
