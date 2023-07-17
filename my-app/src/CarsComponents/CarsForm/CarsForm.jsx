import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../CarValidators/carValidators";

const CarsForm = ({setCheckUpdateForm}) => {

    const {
        register
        , handleSubmit
        , reset
        , formState: {errors, isValid}
        , setValue
    } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const save = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car)
        })
            .then(() => {
                setCheckUpdateForm(prev => !prev)
                reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>brand <input type={'text'} {...register("brand")}/> </label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label>price <input type={'text'} {...register("price")}/> </label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>year <input type={'text'} {...register("year")}/> </label>
                {errors.year && <span>{errors.year.message}</span>}
                <label> <input type={'submit'} disabled={!isValid} value={'create'}/></label>
            </form>
        </div>
    );
};

export {CarsForm};