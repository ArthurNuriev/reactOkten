import React, {useEffect, useState} from 'react';
import {Car} from "./Car/Car";

const Cars = ({checkUpdateForm}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://owu.linkpc.net/carsAPI/v1/cars")
            .then(value => value.json())
            .then(cars => setCars(cars))
    },[checkUpdateForm])

    let sort = cars.sort((a, b) => b.id-a.id);

    return (
        <div>
            {sort.map((car, index) => {
                return(
                    <Car key={index} car={car}/>
                )
            })}
        </div>
    );
};

export {Cars};