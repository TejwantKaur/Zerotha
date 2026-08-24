import React from "react";
import UniComp from "./UniComp";

function Universe() {
  return (
    <div>
      <div className="container center">
          <h2 className="mb-4 text-center">The Zerodha Universe</h2>
          <p className="text-muted text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
       
        <div className="row mt-5 pt-5 text-center">
            {/* <div className="row" style={{display:"flex", flexDirection:"column", width:"30%"}}> */}

            <div className="col text-center">
                <UniComp 
                    imgUrl="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
                    description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                />
                <UniComp 
                    imgUrl="https://zerodha.com/static/images/products/sensibull-logo.svg"
                    description="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
                />
            </div>
            <div className="col text-center">
                <UniComp 
                    imgUrl="https://zerodha.com/static/images/partners/tijori.svg"
                    description="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                />
                <UniComp
                    imgUrl="https://zerodha.com/static/images/products/streak-logo.png"
                    description="Systematic trading platform that allows you to create and backtest strategies without coding."
                />
            </div>
            <div className="col">
                <UniComp
                    imgUrl="https://zerodha.com/static/images/products/smallcase-logo.png"
                    description="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
                />
                <UniComp
                    imgUrl="https://zerodha.com/static/images/products/ditto-logo.png"
                    description="Personalized advice on life and health insurance. No spam and no mis-selling."
                />
            </div>
        </div>
        <div className="row text-center" style={{width:"100%"}}>
            <div className="btn btn-primary mx-auto" style={{width:"20%"}}>Sign up for Free</div>
        </div>
        </div>
      </div>
  );
}

export default Universe;
