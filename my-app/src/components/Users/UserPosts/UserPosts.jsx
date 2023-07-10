import React, {useEffect, useState} from 'react';
import {UserPost} from "./UserPost/UserPost";


const UserPosts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    },[userId])

    return (
        <>
            {posts.map((value, index) => {
                return(
                    <UserPost key={index} post = {value} />
                )
            })}
        </>
    );
};

export {UserPosts};