import React, {useEffect, useState} from 'react';
import {Auto} from "../Auto/Auto";

const Autos = ({onSave}) => {

    const [autos, setAutos] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(autos => setAutos(autos))
    },[onSave])

    let sort = autos.sort((a, b) => b.id - a.id);

    console.log('ff')

    return (
        <div>
            {sort.map((value,id) => {
                return(
                    <Auto key={id} autos={value}/>
                )
            })}
        </div>
    );
};

export {Autos};