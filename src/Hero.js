import React from "react";
import HeroBackground from "./HeroBackground";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className="Hero">
      <NavBar />
      <HeroBackground />
    </div>
  );
}
