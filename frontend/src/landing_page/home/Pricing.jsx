import React from 'react';

function Pricing() {
    return ( 
        <div className='container my-5 py-5'>
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3 fs-2 mx-3'>Unbeatable pricing</h1>
                    <p className='mx-3' style={{textDecoration:"none"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className='mx-3'>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className="col-2"></div>

                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border px-6 py-4">
                            <h1>₹0</h1>
                            <p>Free account opening</p>
                        </div>
                        <div className="col border px-6 py-4">
                            <h1>₹20</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Pricing;