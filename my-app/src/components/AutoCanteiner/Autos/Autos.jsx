import React, {useEffect, useState} from 'react';
import {Auto} from "../Auto/Auto";

const Autos = ({onSave, setOnSave, setCarForUpdate}) => {

    const [autos, setAutos] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(value => value.json())
            .then(autos => setAutos(autos))
    },[onSave])

    let sort = autos.sort((a, b) => b.id - a.id);

    return (
        <div>
            {sort.map((value,id) => {
                return(
                    <Auto key={id} auto={value} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
                )
            })}
        </div>
    );
};

export {Autos};