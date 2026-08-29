import React from "react";

function Education() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col">
          <img src="/media/images/varsity.svg" alt="" />
        </div>
        <div className="col my-5 py-4">
          <h1 className="mb-5">Free and open market education</h1>
          <div className="mb-4">
            <p className="mb-2">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
