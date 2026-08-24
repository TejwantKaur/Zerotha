import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-3" id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-5 m-5">
                <div className="col px-5">
                    <h1 className='fs-3 mb-5'>
                        Search for an answer or browse hep topics to create a ticket
                    </h1>
                    <input type="text" 
                        placeholder='Eg. How do I activate F&O'/> <br />
                    <div className="input-down">
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a> <br />
                    
                        <a href="">Intraday margins</a>
                        <a href="">Kite user manual</a>
                    </div>
                    
                </div>

                <div className="col-6 px-5 mx-5">
                    <h1 className='mp-2'>Featured</h1>
                    <ol>
                        <li className='mb-2'><a href="">Current takeovers and Delisting - January 2024</a></li>
                        <li className='mb-2'><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;