import React, {useState} from 'react';
import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";

const CarsComponents = () => {

    const [checkUpdateForm ,setCheckUpdateForm] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)

    return (
        <div className={"wrapper"}>
            <CarsForm setCheckUpdateForm={setCheckUpdateForm} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars checkUpdateForm={checkUpdateForm} setCheckUpdateForm={setCheckUpdateForm} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsComponents};