import React, {useEffect, useRef} from 'react';
import {useForm} from "react-hook-form";

const AutoForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {

    // const brandRef = useRef(null);
    // const priseRef = useRef(null);
    // const yearRef = useRef(null);

    const {register
        ,handleSubmit
        ,reset
        ,formState:{errors,isValid}
        , setValue , getValues}=useForm();

    useEffect(() => {
        if(carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate])

    const save = (auto) => {

        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auto)
        })
            .then(response => response.json())
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
    };

    const upDate = (auto) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`,{
            method: "put",
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify(auto)
        }).then(value => value.json()).then(()=>{
            setOnSave(prev=> !prev)
            setCarForUpdate(null)
            reset()
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate?save:upDate)}>
                <label> brand: <input type={'text'} placeholder={'brand'} {...register('brand',{
                    required:true,

                })}/> </label>
                <label> price: <input type={'text'} placeholder={'price'} {...register('price',{
                    required:true,
                    valueAsNumber: true,
                    min: 0,
                    max: 1000000
                })}/> </label>
                <label> year: <input type={'text'} placeholder={'year'} {...register('year',{
                    required:true,
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/> </label>
                <label> <input type={'submit'} disabled={!isValid} value={!carForUpdate?'create':'update'}/> </label>
            </form>
        </div>
    );
};

export {AutoForm};