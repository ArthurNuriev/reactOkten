import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {AppRouters} from "../../../routing/AppRouters";

const Comment = ({comment}) => {

    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;

    const handleClick=(postId)=>{
        navigate(AppRouters.COMMENTS+`/${postId}`)
    }

    return (

        <div className={"todo"} onClick={()=>handleClick(postId)}>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export {Comment};