import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import {useParams} from "react-router-dom";
import {PostDetails} from "./PostDetails/PostDetails";

const Post = () => {

    const path = useParams();
    const [post, setPost] = useState(null);
    console.log(path.postId)


    useEffect(() => {
        postsService.getAll(path.postId).then(({data}) => setPost(data))
    },[path.postId])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {Post};