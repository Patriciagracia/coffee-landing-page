import React from "react";
import "./styles/HeroBackground.css";
import hero from "./media/hero.jpg";
import video from "./media/kellymlacy-pexels.mp4";
export default function HeroBackground() {
  return (
    <div>
      <img
        src={hero}
        id="heroImg"
        className="img-fluid"
        alt="credit: Azhar Khairi (Unsplash)"
      />
      <video className="videoHero" autoPlay loop playsInline muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
