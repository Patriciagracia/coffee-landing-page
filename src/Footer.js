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
        <div className="col" id="cool-coffee">
          <img
            src={coolcoffee}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
        </div>
        <div className="col" id="espresso-cup">
          <img
            src={espressocup}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
        </div>
        <div className="col" id="iced-latte">
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
              Mediterráneo 92 <br></br> Barcelona, 08013
            </p>
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
              Rumi 37 <br></br> Zaragoza, 50006
            </p>
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
              Sa Nura 91 <br></br> Ciudadela, 07760
            </p>

            <p>Mon–Fri 8.30am–5.30pm </p>
            <p>Sat-Sun 10am–2pm</p>
            <button type="submit" className="btn btn-primary" id="btn-maps">
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
        <div className="col" id="coffee-beans">
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
      <p className="credits">
        {" "}
        Developed by{" "}
        <a href="https://www.linkedin.com/in/patricia-gracia/" target="_blank">
          Patricia Gracia
        </a>{" "}
        {""}
        with love and lots of coffee. Open-sourced on {""}
        <a
          href="https://github.com/Patriciagracia/coffee-landing-page"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
    </div>
  );
}
