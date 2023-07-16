import React from 'react';

const Auto = ({auto,setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year}=auto;

    const onDelete = (id) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
            method: "delete",
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}
        }).then(()=>setOnSave(prev=> !prev))
    }

    return (
        <div>
            <hr/>
            &nbsp;&nbsp; id: {id}<br/>
            &nbsp;&nbsp; brand: {brand}<br/>
            &nbsp;&nbsp; price: {price}<br/>
            &nbsp;&nbsp; year: {year}<br/>
            &nbsp;&nbsp;<button onClick={()=>onDelete(id)}>delete</button>
            &nbsp;&nbsp;<button onClick={()=>setCarForUpdate(auto)}>update</button>
            <hr/>
        </div>
    );
};

export {Auto};