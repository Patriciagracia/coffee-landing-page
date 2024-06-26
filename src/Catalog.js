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
        <div className="col-6" id="product">
          <img
            src={earlybirdCoffeeEspressoMediumRoast}
            alt="Espresso Medium Roast"
            className="img-fluid"
          />
          <p>Espresso Medium Roast</p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 15 €
          </button>
        </div>
        <div className="col-6" id="product">
          <img
            src={earlybirdCoffeeEspressoDecaf}
            alt="Earlybird Coffee Espresso Decaf"
            className="img-fluid"
          />
          <p>Early Coffee Espresso Decaf</p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 13 €
          </button>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-6" id="product">
          <img
            src={earlybirdCoffeeDecaf}
            alt="Earlybird Coffee Decaf"
            className="img-fluid"
          />
          <p>Early Coffee Decaf</p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 13 €
          </button>
        </div>
        <div className="col-6" id="product">
          <img src={earlybirdCoffeeFilter} alt="Filter" className="img-fluid" />
          <p>Special Filter</p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 18 €
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6" id="product">
          <img
            src={earlybirdCoffeeEspresso}
            alt="Espresso coffee"
            className="img-fluid"
          />
          <p>Espresso Coffee </p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 15 €
          </button>
        </div>
        <div className="col-6" id="product">
          <img
            src={earlybirdCoffeeFilterMediumRoast}
            alt="Filter Medium Roast"
            className="img-fluid"
          />
          <p>Filter Medium Roast</p>
          <button type="submit" className="btn btn-primary" id="btn-catalog">
            Add - 15 €
          </button>
        </div>
      </div>
    </div>
  );
}
