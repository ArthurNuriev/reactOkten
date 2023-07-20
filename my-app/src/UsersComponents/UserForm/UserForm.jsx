import React from 'react';
import {useForm} from "react-hook-form";
import {UserApiService} from "../../services/apiService";

const UserForm = () => {

    const {register,handleSubmit} = useForm()



    return (
        <div>
            <form onSubmit={handleSubmit((user)=>UserApiService.createUser(user))}>
                <p>USER:</p>
                <label>name <input type={'text'} {...register('name')}/> </label>
                <label>username <input type={'text'} {...register('username')}/> </label>
                <label>email <input type={'text'}{...register('email')}/> </label>
                <label> <input type={'submit'}/></label>
            </form>
        </div>
    );
};

export {UserForm};