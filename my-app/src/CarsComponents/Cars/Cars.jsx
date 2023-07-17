import React, {useEffect, useState} from 'react';
import {Car} from "./Car/Car";
import {CarApiService} from "../services/apiService";

const Cars = ({checkUpdateForm, setCheckUpdateForm, setCarForUpdate}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarApiService.view(setCars)
    },[checkUpdateForm])

    let sort = cars.sort((a, b) => b.id-a.id);

    return (
        <div>
            {sort.map((car, index) => {
                return(
                    <Car key={index} car={car} setCheckUpdateForm={setCheckUpdateForm} setCarForUpdate={setCarForUpdate}/>
                )
            })}
        </div>
    );
};

export {Cars};