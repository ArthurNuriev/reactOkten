import React, {useState} from 'react';
import {AutoForm} from "./AutoForm/AutoForm";
import {Autos} from "./Autos/Autos";

const AutoContainer = () => {

     let [onSave, setOnSave] = useState(null);

    return (
        <div>
            <AutoForm setOnSave={setOnSave}/>
            <Autos onSave={onSave}/>
        </div>
    );
};

export {AutoContainer};