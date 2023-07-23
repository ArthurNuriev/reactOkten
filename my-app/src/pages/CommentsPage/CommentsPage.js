import React from 'react';
import {Outlet} from "react-router-dom";
import {Comments} from "../../components/Comments/Comments";
import styles from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={styles.box}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};