import React from 'react';
import {useForm} from "react-hook-form";

const CarsForm = () => {

const {register
    ,handleSubmit
    ,reset
    ,formState:{errors
        ,isValid}
    ,setValue}=useForm()

    console.log(register())

    const save = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>brand <input type={'text'} {...register("brand")}/> </label>
                <label>price <input type={'text'}/> </label>
                <label>year <input type={'text'}/> </label>
                <label> <input type={'submit'} value={'create'}/></label>
            </form>
        </div>
    );
};

export {CarsForm};