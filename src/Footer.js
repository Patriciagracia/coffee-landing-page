import React from "react";
import "./styles/Footer.css";
import coffees from "./media/coffees.jpg";
import barista from "./media/barista.jpg";
import coffeeBeans from "./media/coffee-beans.jpg";
import coolcoffee from "./media/coolcoffee.jpg";
import espressocup from "./media/espressocup.jpg";
import icedlatte from "./media/icedlatte.jpg";

export default function Footer() {
  return (
    <div>
      <div className="directions-media row">
        <div className="col" id="coolcoffee">
          <img
            src={coolcoffee}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
        </div>
        <div className="col" id="espressocup">
          <img
            src={espressocup}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
        </div>
        <div className="col" id="icedlatte">
          <img
            src={icedlatte}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row directions" id="contact">
        <div className="col-12 col-md-4">
          <p>Cafe</p>
          <p className="street">Mediterráneo 92</p>
          <p className="street">Barcelona 08013</p>
          <br></br>
          <p>Mon–Fri 8.30am–5.30pm </p>
          <p>Sat-Sun 10am–7pm</p>
        </div>
        <div className="col-12 col-md-4">
          <p>Roastery</p>
          <p className="street">Rumi 37</p>
          <p className="street">Zaragoza 50007</p>
          <br></br>
          <p>Mon–Fri 8.30am–5.30pm </p>
          <p>Sat-Sun 10am–6pm</p>
        </div>
        <div className="col-12 col-md-4">
          <p>Store & Cafè</p>
          <p className="street">Sa Nura 91</p>
          <p className="street">Ciudadela de Menorca 07760</p>
          <br></br>
          <p> Temporarily closed</p>
        </div>
      </div>
      <div className="directions-media row">
        <div className="col" id="barista">
          <img
            src={barista}
            alt="Earlybird Coffee Decaf"
            className=" img-fluid"
          />
        </div>
        <div className="col" id="coffeeBeans">
          <img
            src={coffeeBeans}
            alt="Earlybird Coffee Decaf"
            className=" img-fluid"
          />
        </div>
        <div className="col" id="coffees">
          <img
            src={coffees}
            alt="Earlybird Coffee Decaf"
            className=" img-fluid"
          />
        </div>
      </div>
      <p className="credits"> Developed by Patricia Gracia 👩🏻‍💻</p>
    </div>
  );
}
