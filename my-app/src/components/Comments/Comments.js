import React, {useEffect, useState} from 'react';

import {Comment} from "./Comment/Comment";
import {commentsService} from "../../services/commentsService";

const Comments = () => {

    const [comments, SetComments] = useState([]);

    useEffect( () => {
        commentsService.getAll().then(({data}) => SetComments(data))
    }, [])

    return (
        <div>
            {comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    );
};

export {Comments};