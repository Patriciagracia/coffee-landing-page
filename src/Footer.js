import React from "react";
import "./Footer.css";
import coffees from "./media/coffees.jpg";
import barista from "./media/barista.jpg";
import coffeeBeans from "./media/coffee-beans.jpg";

export default function Footer() {
  return (
    <div>
      <div className="directions" id="contact">
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
      <div className="directions-media row">
        <div className="col" id="barista">
          <img
            src={barista}
            alt="Earlybird Coffee Decaf"
            className="barista img-fluid"
          />
        </div>
        <div className="col" id="coffeeBeans">
          <img
            src={coffeeBeans}
            alt="Earlybird Coffee Decaf"
            className="coffeeBeans img-fluid"
          />
        </div>
        <div className="col" id="coffees">
          <img
            src={coffees}
            alt="Earlybird Coffee Decaf"
            className="coffeeBeans img-fluid"
          />
        </div>
      </div>
      <p text-center> Developed by Patricia Gracia </p>
    </div>
  );
}
