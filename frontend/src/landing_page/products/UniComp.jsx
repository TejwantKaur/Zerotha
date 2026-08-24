import React from 'react';

function UniComp({ imgUrl, description }) {
    return (

        <div className="container p-5">
            <div className="row">
                <img className='mx-auto' 
                src={imgUrl} style={{width: "45%"}}/>
            </div>
            <div className="row">
                <p className='text-muted mt-3'>{description}</p>
            </div>
        </div>
  
     );
}

export default UniComp;
