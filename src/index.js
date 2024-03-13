import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";

import "./styles/index.css";
import Hero from "./Hero";

import reportWebVitals from "./reportWebVitals";
import Catalog from "./Catalog";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hero />
    <h1>COFFEE</h1>
    <p>Free shipping from 35€</p>
    <Catalog />
    <Subscribe />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
