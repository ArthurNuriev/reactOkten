import {useEffect} from "react";

const useFetch = (endpoint, setData) => {

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then(response => response.json())
            .then(data => setData(data))
    });

};

export {useFetch};