import React from 'react';

function EcoComponent({title, description}) {
    return ( 
        <div className='container p-2'>
            <h2 className='fs-4'>{title}</h2>
            <p className='fs-6 text-muted'>{description}</p>
        </div>
        // text muted; decreases opacity; 
     );
}

export default EcoComponent;