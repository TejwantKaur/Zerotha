import React from "react";
import './Footer.css'

export default function Footer() {
  // option, multiple cursors
  // shift left arrow, to select
  // option; end of word;
  // fn right arrow; end of row;

  return (
    <footer className="" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div
        className="container my-5 p-5 border-top"
      >
        <div className="row">
          <div className="col">
            <img
              src="/media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
          </div>

          <div className="col">
            <p>Account</p>
            <a href=""> Minor demat account</a> <br />
            <a href=""> Open demat account</a> <br />
            <a href=""> NRI demat account</a> <br />
            <a href=""> HUF demat account</a> <br />
            <a href=""> Commodity</a> <br />
            <a href=""> Dematerialisation</a> <br />
            <a href=""> Fund transfer</a> <br />
            <a href=""> MTF</a> <br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href=""> Contact us </a> <br />
            <a href=""> Support portal </a> <br />
            <a href=""> How to file a complaint? </a> <br />
            <a href=""> Status of your complaints </a> <br />
            <a href=""> Bulletin </a> <br />
            <a href=""> Circular </a> <br />
            <a href=""> Z-Connect blog </a> <br />
            <a href=""> Downloads </a> <br />
          </div>

          <div className="col">
            <p>Company</p>
            <a href=""> About </a> <br />
            <a href=""> Philosophy </a> <br />
            <a href=""> Press & media </a> <br />
            <a href=""> Careers </a> <br />
            <a href=""> Zerodha Cares (CSR) </a> <br />
            <a href=""> Zerodha.tech </a> <br />
            <a href=""> Open source </a> <br />
            <a href=""> Referral program </a> <br />
          </div>
        </div>
      </div>
    </footer>
  );
}
