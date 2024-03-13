import React from "react";
import "./styles/Subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <h2>Subscribe to our newsletter</h2>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            I have read and agree to the terms & conditions.
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
      </form>
    </div>
  );
}
