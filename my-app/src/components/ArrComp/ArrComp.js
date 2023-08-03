import React, {useState} from 'react';

const ArrComp = () => {

    const [arr, setArr] = useState([1,2,3])

    return (
        <div>
            {arr.map((value, index) => <p key={index}>{value}</p>)}
        </div>
    );
};

export {ArrComp};