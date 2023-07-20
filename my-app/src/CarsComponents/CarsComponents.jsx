import React, {useState} from 'react';
import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";
import {UserForm} from "../UsersComponents/UserForm/UserForm";
import {CommentForm} from "../UsersComponents/CommentsForm/CommentForm";

const CarsComponents = () => {

    const [checkUpdateForm ,setCheckUpdateForm] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)

    return (
        <div className={"wrapper"}>
            <UserForm/>
            <CommentForm/>
            <CarsForm setCheckUpdateForm={setCheckUpdateForm} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars checkUpdateForm={checkUpdateForm} setCheckUpdateForm={setCheckUpdateForm} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsComponents};