import React, {useState} from 'react';
import {useFetch} from "../../hook/useFetch";
import {Post} from "./Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useFetch("posts", setPosts)


    return (
        <>
            {posts.map((value, index) => <Post key={index} post={value}/>)}
        </>
    );
};

export {Posts};