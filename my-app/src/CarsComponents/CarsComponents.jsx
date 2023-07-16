import React from 'react';
import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";

const CarsComponents = () => {
    return (
        <div className={"wrapper"}>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export {CarsComponents};