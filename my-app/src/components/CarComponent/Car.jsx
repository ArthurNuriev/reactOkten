import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div className={"car"}>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <hr/>
        </div>
    );
};

export {Car};