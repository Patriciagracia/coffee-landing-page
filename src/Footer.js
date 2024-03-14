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
          <div className="wrapper">
            <h5>Café</h5>
            <p className="street">
              Mediterráneo 92 <br></br> Barcelona 08013
            </p>
            <br></br>
            <p>Mon–Fri 8.30am–5.30pm </p>
            <p>Sat-Sun 10am–7pm</p>
            <button type="submit" className="btn btn-primary" id="btn-maps">
              View Maps
            </button>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="wrapper">
            <h5>Roastery</h5>
            <p className="street">
              Rumi 37 <br></br> Zaragoza 50007
            </p>
            <br></br>
            <p>Mon–Fri 8.30am–5.30pm </p>
            <p>Sat-Sun 10am–6pm</p>
            <button type="submit" className="btn btn-primary" id="btn-maps">
              View Maps
            </button>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="wrapper">
            <h5>Store & Café</h5>
            <p className="street">
              Sa Nura 91 <br></br> Ciudadela de Menorca 07760
            </p>
            <br></br>
            <p>Mon–Fri 8.30am–5.30pm </p>
            <p>Sat-Sun 10am–2pm</p>
            <br></br>
            <button type="submit" className="btn btn-primary" id="nura-maps">
              View Maps
            </button>
          </div>
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
