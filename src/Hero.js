import React from "react";
import "./styles/Hero.css";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <div className="hero">
      <HeroBackground />
      <h1>COFFEE</h1>
      <p id="shipping">Free shipping from 35€</p>
    </div>
  );
}
