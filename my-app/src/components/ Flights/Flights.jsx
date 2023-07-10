import {useEffect, useState} from "react";
import {Flight} from "./ Flight/Flight";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(flights => setFlights(flights))
    }, [])


    return (
        <div>
            {flights.filter(value => value['launch_year'] !== "2020").map((value, index) => {
                return (
                    <Flight key={index} flight={value}/>
                )
            })}
        </div>
    )
}

export {Flights}