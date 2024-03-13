import React from "react";
import "./styles/Catalog.css";
import earlybirdCoffeeDecaf from "./media/earlybird-coffee-decaf.jpg";
import earlybirdCoffeeEspressoDecaf from "./media/earlybird-coffee-espresso-decaf.jpg";
import earlybirdCoffeeEspressoMediumRoast from "./media/earlybird-coffee-espresso-medium-roast.jpg";
import earlybirdCoffeeEspresso from "./media/earlybird-coffee-espresso.jpg";
import earlybirdCoffeeFilterMediumRoast from "./media/earlybird-coffee-filter-medium-roast.jpg";
import earlybirdCoffeeFilter from "./media/earlybird-coffee-filter.jpg";

export default function Catalog() {
  return (
    <div className="container catalog" id="shop">
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
            alt="Earlybird Coffee Espresso Decaf"
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
            alt="Espresso Medium Roast"
            className="img-fluid"
          />
          <p>Espresso Medium Roast</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
        <div className="col-6 text-center">
          <img src={earlybirdCoffeeFilter} alt="Filter" className="img-fluid" />
          <p>Special Filter</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeEspresso}
            alt="Espresso coffee"
            className="img-fluid"
          />
          <p>Espresso Coffee </p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
        <div className="col-6 text-center">
          <img
            src={earlybirdCoffeeFilterMediumRoast}
            alt="Filter Medium Roast"
            className="img-fluid"
          />
          <p>Filter Medium Roast</p>
          <button className="add-btn"> Add - 15 €</button>
        </div>
      </div>
    </div>
  );
}
