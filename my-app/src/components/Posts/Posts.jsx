import React from 'react';
import {Post} from "./Post/Post";

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map((post, id)=>{
                return(
                    <Post key={id} post={post}/>
                )
            })}

        </div>
    );
};

export {Posts};