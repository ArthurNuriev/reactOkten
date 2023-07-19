import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {AppLayout};