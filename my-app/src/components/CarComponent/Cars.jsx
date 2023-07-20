import React, {useEffect, useState} from 'react';
import {Car} from "./Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(cars => setCars(cars))

    },[flag])

    console.log('rend')

    return (
        <div className={"cars"}>
            <button onClick={()=> setFlag(prevState => !prevState)}>get cars</button>

           {flag && cars.map((car, id)=>{
                return(
                    <Car key={id} car={car}/>
                )
            })}
        </div>
    );
};

export {Cars};