import React from 'react';
import {Box, IconButton, Stack, TextField} from "@mui/material";
import styles from "./LoginForm.module.css";
import Fingerprint from '@mui/icons-material/Fingerprint';
import {useForm} from "react-hook-form";

const LoginForm = () => {

    const {
        register
        , handleSubmit
        , setValue
        , getValues
    } = useForm();

    return (
        <div className={styles.form}>
            {/*<Box*/}
            {/*    component="form"*/}
            {/*    sx={{*/}
            {/*        '& .MuiTextField-root': {m: 1, width: '25ch'},*/}
            {/*    }}*/}
            {/*    noValidate*/}
            {/*    autoComplete="off"*/}
            {/*>*/}

            <form>

                <TextField
                    id="outlined-password-input"
                    label="Login"
                    type="text"
                    autoComplete="nickname"/>

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"/>

                <IconButton onSubmit={()=>console.log('feeffef')} aria-label="fingerprint">
                    <Fingerprint sx={{color: 'black',}}/>
                </IconButton>

            </form>


            {/*</Box>*/}
        </div>
    );
};

export {LoginForm};










