import React, {useRef} from 'react';
import styles from "./Car.module.css";


const DeleteCar = () => {

    let idRef = useRef(null);
    const handelSubmit = (e) => {
        e.preventDefault()

        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idRef.current.value}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(value => value.text())
            .then(value => console.log(value, idRef.current.value))
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handelSubmit}>
                <h3>Delete car by id</h3>
                <label>
                    ID:<br/>
                    <input type="text" ref={idRef}/>
                </label><br/><br/>
                <label>
                    <input type="submit" value="delete"/>
                </label>
            </form>
        </div>
    );
};

export {DeleteCar};