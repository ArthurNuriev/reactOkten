import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todoService";
import {Comment} from "./Comment/Comment";
import {commentService} from "../../services/commentService";

const Comments = () => {

    const [comments, setComment] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComment(data))
    },[])


    return (
        <div>
            {comments.map((comment, index) => {
                return(
                    <Comment key={index} comment={comment}/>
                )
            })}
        </div>
    );
};

export {Comments};