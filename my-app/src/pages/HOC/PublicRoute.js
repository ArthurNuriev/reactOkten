import React from 'react';
import {Navigate} from "react-router-dom";

const PublicRoute = ({Component}) => {

    const authUser = JSON.parse(localStorage.getItem('authUser'));

    return authUser?.id ? <Component/> : <Navigate to={'/login'}/>
};

export {PublicRoute};