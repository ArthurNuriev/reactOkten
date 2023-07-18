import React from 'react';
import {useForm} from "react-hook-form";
import {UserApiService} from "../../services/apiService";

const CommentForm = () => {

    const {register,handleSubmit} = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit((data)=>UserApiService.createComment(data))}>
                <p>COMMENT:</p>
                <label>postId <input type={'text'} {...register('postId')}/> </label>
                <label>name <input type={'text'} {...register('name')}/> </label>
                <label>email <input type={'text'}{...register('email')}/> </label>
                <label>body <input type={'text'}{...register('body')}/> </label>
                <label> <input type={'submit'}/></label>
            </form>
        </div>
    );
};

export {CommentForm};