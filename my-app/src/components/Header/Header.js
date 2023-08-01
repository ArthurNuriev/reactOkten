import React from 'react';
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className={css.header}>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <NavLink to={'/cars'}>Cars</NavLink>
            </div>
        )
    }

}

export {Header};