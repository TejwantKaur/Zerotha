import React from 'react';

function Team() {
    return ( 
        <div className="container mb-5 pb-5">
            <div className="row mb-5">
                <h1 className=" text-center mb-5 border-top p-5">
                    People
                </h1>
            </div>
            <div>
                <div className="row">
                    <div className="col text-center">
                        <img src="/media/images/nithin-kamath.jpg" alt="" 
                            style={{width:"60%", borderRadius:"100%"}}/>
                    </div>
                    <div className="col">
                        <p className='fs-5 m-4 text-muted'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p className='fs-5 m-4 text-muted'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p className='fs-5 m-4 text-muted'>Playing basketball is his zen.</p>
                        <p className='fs-5 m-4 text-muted'>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;