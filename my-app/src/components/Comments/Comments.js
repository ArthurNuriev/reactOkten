import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment/Comment";
import {commentService} from "../../services/commentService";
import {Outlet} from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    },[])


    return (
        <div>
            <Outlet/>
            {comments.map((comment, index) => {
                return(
                    <Comment key={index} comment={comment}/>
                )
            })}
        </div>
    );
};

export {Comments};