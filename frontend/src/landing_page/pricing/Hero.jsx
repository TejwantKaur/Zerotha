import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 border-bottom">
                <h1 className='text-center'>Charges</h1>
                <h4 className='text-center text-muted pt-4'>List of all charges and taxes</h4>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col p-5">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                    <h3 className='p-2'>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col py-5 text-center">
                    <img src="https://zerodha.com/static/images/other-trades.svg" alt="" />
                    <h3 className='p-2'>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-5 text-center">
                    <img className='img-fluid' src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                    <h3 className='p-2'>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
        </div>
     );
}

export default Hero;