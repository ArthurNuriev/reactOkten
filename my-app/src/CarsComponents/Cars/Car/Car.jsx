import React from 'react';
import {CarApiService} from "../../services/apiService";

const Car = ({car, setCheckUpdateForm}) => {

    const {id, brand, price, year} = car;

    const deleteCar = () => {
      CarApiService.delete(id,setCheckUpdateForm)
    }

    return (
        <div className={"car"}>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={deleteCar}>delete</button>
            &nbsp;<button>update</button>
        </div>
    );
};

export {Car};