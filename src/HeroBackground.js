import React from "react";
import "./media/HeroBackground.css";
import hero from "./media/hero.jpg";
import video from "./media/kellymlacy-pexels.mp4";
export default function HeroBackground() {
  return (
    <div>
      <img
        src={hero}
        id="heroImg"
        className="img-fluid"
        alt="photo by Azhar Khairi (Unsplash)"
      />
      <video className="videoHero" controls autoplay loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
