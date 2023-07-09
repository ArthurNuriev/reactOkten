import React, {useState} from 'react';

const UserPost = ({post}) => {
    const {userId, id, tittle, body} = post;
    return (
        <div>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>tittle: {tittle}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {UserPost};