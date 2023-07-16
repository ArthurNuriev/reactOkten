import React, {useEffect, useState} from 'react';
import {Car} from "./Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://owu.linkpc.net/carsAPI/v1/cars")
            .then(value => value.json())
            .then(cars => setCars(cars))
    },[])


    return (
        <div>
            {cars.map((car, index) => {
                return(
                    <Car key={index} car={car}/>
                )
            })}
        </div>
    );
};

export {Cars};