import React, {useRef} from 'react';

const AutoForm = ({setOnSave}) => {

    const brandRef = useRef(null);
    const priseRef = useRef(null);
    const yearRef = useRef(null);

    const save = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: priseRef.current.value,
                year: yearRef.current.value
            })
        })
            .then(response => response.json())
            .then(() => {
                setOnSave(prev => !prev)
                brandRef.current.value = null;
                priseRef.current.value = null;
                yearRef.current.value = null;
            })

    };

    return (
        <div>
            <form onSubmit={save}>
                <label> brand: <input type={'text'} ref={brandRef}/> </label>
                <label> price: <input type={'text'} ref={priseRef}/> </label>
                <label> year: <input type={'text'} ref={yearRef}/> </label>
                <label> <input type={'submit'} value={'create'}/> </label>
            </form>
        </div>
    );
};

export {AutoForm};