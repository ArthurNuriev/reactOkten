import React from 'react';

const Auto = ({autos}) => {
    const {id, brand, price, year}=autos;
    return (
        <div>
            <hr/>
            &nbsp;&nbsp; id: {id}<br/>
            &nbsp;&nbsp; brand: {brand}<br/>
            &nbsp;&nbsp; price: {price}<br/>
            &nbsp;&nbsp; year: {year}
            <hr/>
        </div>
    );
};

export {Auto};