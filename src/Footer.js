import React from "react";
import cafe from "./media/cafe.jpg";

export default function Footer() {
  return (
    <div>
      <div className="directions">
        <div>
          <p>Cafe</p>
          <p>Ausiàs Marc 151 Barcelona 08013</p>
          <p>Mon–Fri 8.30am–5.30pm </p>
          <p>Sat-Sun 10am–7pm</p>
        </div>
        <div>
          <p>Roastery</p>
          <p>Ausiàs Marc 151 Barcelona 08013</p>
          <p>Mon–Fri 8.30am–5.30pm </p>
        </div>
        <div>
          <p>Store & Cafè</p>
          <p> Temporarily closed</p>
        </div>
      </div>
      <div className="directions-media">
        <img src={cafe} alt="Earlybird Coffee Decaf" className="img-fluid" />
      </div>
      <p text-center> Developed by Patricia Gracia </p>
    </div>
  );
}
