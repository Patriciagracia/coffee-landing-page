import React from "react";
import "./Catalog.css";
import earlybirdCoffeeDecaf from "./media/earlybird-coffee-decaf.jpg";
import earlybirdCoffeeEspressoDecaf from "./media/earlybird-coffee-espresso-decaf.jpg";
import earlybirdCoffeeEspressoMediumRoast from "./media/earlybird-coffee-espresso-medium-roast.jpg";
import earlybirdCoffeeEspresso from "./media/earlybird-coffee-espresso.jpg";
import earlybirdCoffeeFilterMediumRoast from "./media/earlybird-coffee-filter-medium-roast.jpg";
import earlybirdCoffeeFilter from "./media/earlybird-coffee-filter.jpg";

export default function Catalog() {
  return (
    <div className="container catalog">
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeDecaf}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
          <p>Early Coffee Decaf</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeEspressoDecaf}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
          <p>Early Coffee Espresso Decaf</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeEspressoMediumRoast}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
          <p>Hola</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeFilter}
            alt="early bird Coffee Espresso"
            className="img-fluid"
          />
          <p>Hola</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeEspresso}
            alt="early bird Coffee Espresso"
            className="img-fluid"
          />
          <p>Hola</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeFilterMediumRoast}
            alt="early bird Coffee Espresso"
            className="img-fluid"
          />
          <p>Hola</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
      </div>
    </div>
  );
}
