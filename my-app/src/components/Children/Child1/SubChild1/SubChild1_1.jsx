import React, {useContext} from 'react';
import {Context} from "../../../../App";

const SubChild1_1 = () => {

    const {text} = useContext(Context);

    return (
        <div className={"subChild"}>
            SubChild1_1  <b>{text}</b>
        </div>
    );
};

export {SubChild1_1};