import React from "react";
import hero from "./media/hero.jpg";
export default function HeroBackground() {
  return (
    <img
      src={hero}
      className="img-fluid"
      alt="photo by Azhar Khairi (Unsplash)"
    />
  );
}
