import React from 'react';
import {IconButton,TextField} from "@mui/material";
import styles from "./LoginForm.module.css";
import Fingerprint from '@mui/icons-material/Fingerprint';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();

    const {
        register
        , handleSubmit
    } = useForm();

    const saveLogin = (data) => {
        console.log(data)
        localStorage.setItem('authUser', JSON.stringify({...data, id: 123}))
        navigate('/main');

    };

    return (
        <div className={styles.form}>

            <form onSubmit={handleSubmit(saveLogin)}>

                <div className={styles.inputTextField}>
                <TextField

                    {...register("username")}
                    id="outlined-password-input"
                    label="Login"
                    type="text"
                    autoComplete="nickname"/>
                </div>

                <div className={styles.inputTextField}>
                <TextField

                    {...register("password")}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"/>
                </div>

                <IconButton type={'submit'} aria-label="fingerprint">
                    <Fingerprint sx={{color: 'black', size: 'large'}}/>
                </IconButton>

            </form>

        </div>
    );
};

export {LoginForm};


// <form onSubmit={handleSubmit(carForUpdate ? updateCar: saveCar)}>
//     <p>CAR:</p>
//     <label>brand <input type={'text'} {...register("brand")}/> </label>
//     {errors.brand && <span>{errors.brand.message}</span>}
//     <label>price <input type={'text'} {...register("price")}/> </label>
//     {errors.price && <span>{errors.price.message}</span>}
//     <label>year <input type={'text'} {...register("year")}/> </label>
//     {errors.year && <span>{errors.year.message}</span>}
//     <label> <input type={'submit'} disabled={!isValid} value={carForUpdate ?'update':'create'}/></label>
// </form>









