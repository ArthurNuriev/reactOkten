import React, {useState} from 'react';
import {AutoForm} from "./AutoForm/AutoForm";
import {Autos} from "./Autos/Autos";

const AutoContainer = () => {

     let [onSave, setOnSave] = useState(null);
     let [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <AutoForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Autos onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {AutoContainer};