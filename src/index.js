import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";

import "./styles/index.css";
import Hero from "./Hero";
import Catalog from "./Catalog";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));

document.title = "Coffee Lading Page";

root.render(
  <React.StrictMode>
    <Hero />
    <h1>COFFEE</h1>
    <p id="shipping">Free shipping from 35€</p>
    <Catalog />
    <Subscribe />
    <Footer />
  </React.StrictMode>
);
