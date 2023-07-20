import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {Post} from "./Post/Post";

const Posts = () => {

    const path = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getAll(path.id).then(value => value.data).then(value => setPost(value))
    },[path.id])
    console.log('*************')


    return (
        <div>
            {post.title}
            {console.log(post)}

        </div>
    );
};

export {Posts};