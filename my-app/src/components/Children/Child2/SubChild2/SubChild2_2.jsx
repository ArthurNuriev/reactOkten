import React, {useContext} from 'react';
import {Context} from "../../../../App";

const SubChild2_2 = () => {

    const someText = "someText";
    const {showText} = useContext(Context);
    console.log(someText)

    return (
            <div className={"subChild"}>
                SubChild2_2
                <button onClick={()=>{showText(someText)}}>send text to sub1</button>
            </div>
    );
};

export {SubChild2_2};