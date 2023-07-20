import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {Post} from "./Post/Post";

const Posts = () => {

    const path = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAll(path.id).then(value => value.data).then(value => setPost(value))
    },[])
    console.log('*************')


    return (
        <div>
            <Outlet/>
            {post.map((value, index) => {
                return(
                    <Post key={index} post={post}/>
                )
            })}

        </div>
    );
};

export {Posts};