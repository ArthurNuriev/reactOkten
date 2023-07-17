import React, {useState} from 'react';
import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";

const CarsComponents = () => {

    const [checkUpdateForm ,setCheckUpdateForm] = useState(null);

    return (
        <div className={"wrapper"}>
            <CarsForm setCheckUpdateForm={setCheckUpdateForm}/>
            <Cars checkUpdateForm={checkUpdateForm}/>
        </div>
    );
};

export {CarsComponents};