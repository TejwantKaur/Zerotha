import React from "react";

import Hero from "./Hero";
import Ecosystem from "./Ecosystem";
import Pricing from "./Pricing";
import Education from "./Education";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
export default HomePage;
