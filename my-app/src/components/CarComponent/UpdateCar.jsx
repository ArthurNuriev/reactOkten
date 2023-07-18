import React, {useRef} from 'react';
import styles from "./Car.module.css";
const UpdateCar = () => {

    let brandRef = useRef(null);
    let priceRef = useRef(null);
    let yearRef = useRef(null);
    let idRef = useRef(null);

    const handelSubmit = (e) => {
        e.preventDefault()

        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${idRef.current.value}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value
            })
        })
            .then(value => value.json())
            .then(value => console.log(value))
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handelSubmit}>
                <h3>Update car</h3>
                <label>
                    ID:<br/>
                    <input type="text" ref={idRef}/>
                </label><br/>
                <label>
                    brand:<br/>
                    <input type="text" ref={brandRef}/>
                </label><br/>
                <label>
                    price:<br/>
                    <input type="text" ref={priceRef}/>
                </label><br/>
                <label>
                    year:<br/>
                    <input type="text" ref={yearRef}/>
                </label><br/><br/>
                <label>
                    <input type="submit" value="create"/>
                </label>
            </form>
        </div>
    );
};

export {UpdateCar};