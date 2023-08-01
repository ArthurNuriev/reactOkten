import React from 'react';

import {carService} from "../../service/apiService/carService";
import {Car} from "./Car/Car";


class Cars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
     carService.getAll().then(({data}) => {
         this.setState({
             cars: data
         })
     })
    }

    render() {
        return (
            // <h6>fefe</h6>
            // <h6>{this.state.data[0].brand}</h6>
            <div>{this.state.cars.map((car, index)=> <Car key={index} car={car}/>)}</div>


        )
    }

}

export {Cars};