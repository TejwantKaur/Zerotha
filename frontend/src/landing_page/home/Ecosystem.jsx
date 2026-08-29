import React from "react";
import EcoComponent from "./EcoComponent";
import EcoComponentData from "./EcoComponentData";

// stats

function Ecosystem() {
  return (
    // total colms = 12; always partition accordingly;
    // for responsive; lg screen 6 colms, small 12;

    // mx my: margin across (x & y) axis;
    <div className="container my-5 py-5">
      <div className="row mt-5">
        <div className="col-lg-6 my-5 py-5">
          <h2 className="mb-3 ms-4">Trust with confidence</h2>
          <div className="row ms-3" style={{ width: "90%" }}>
            {EcoComponentData.map((item, idx) => (
              <EcoComponent
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <img
            src="/media/images/ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="mx-5">
            <a href="" className="ms-5 ps-5" style={{ textDecoration: "none" }}>
              Explore our Products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="ps-5" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
