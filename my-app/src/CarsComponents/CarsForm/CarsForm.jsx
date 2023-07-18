import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../CarValidators/carValidators";
import {CarApiService} from "../../services/apiService";

const CarsForm = ({setCheckUpdateForm, carForUpdate,setCarForUpdate}) => {



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

    useEffect(() => {
        if(carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate])

    const saveCar = (car) => {
        CarApiService.save(car,setCheckUpdateForm,reset);
    }
    const updateCar = (car) => {
        console.log(car)
         CarApiService.update(carForUpdate,setCheckUpdateForm,reset,car,setCarForUpdate);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar: saveCar)}>
                <p>CAR:</p>
                <label>brand <input type={'text'} {...register("brand")}/> </label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label>price <input type={'text'} {...register("price")}/> </label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>year <input type={'text'} {...register("year")}/> </label>
                {errors.year && <span>{errors.year.message}</span>}
                <label> <input type={'submit'} disabled={!isValid} value={carForUpdate ?'update':'create'}/></label>
            </form>
        </div>
    );
};

export {CarsForm};