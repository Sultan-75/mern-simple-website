import React from "react";
import { NavLink } from "react-router-dom";

const Eroorpage = () => {
  return (
    <>
      <div className="container-fluid homebody" id="not-found">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="font-weight-bold mb-0 text-danger">404</h1>
            <h2 className="font-weight-bold text-muted text-capitalize font-weight-bold">
              page not found
            </h2>
            <button className="btn btn-outline-light">
              <NavLink className="text-decoration-none text-dark" to="/">
                Back to Home Page
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eroorpage;
