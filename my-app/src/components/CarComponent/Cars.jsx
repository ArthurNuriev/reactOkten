import React, {useEffect, useState} from 'react';
import {Car} from "./Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(cars => handelClick(cars))
    },[])

    const handelClick = (cars) => {
        setCars(cars)
    }

    return (
        <div className={"car"}>
            <button onClick={handelClick}>get cars</button>

           {cars.map((car, id)=>{
                return(
                    <Car key={id} car={car}/>
                )
            })}
        </div>
    );
};

export {Cars};