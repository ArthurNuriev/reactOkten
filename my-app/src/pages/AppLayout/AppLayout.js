import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import {Posts} from "../../components/Posts/Posts";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {AppLayout};