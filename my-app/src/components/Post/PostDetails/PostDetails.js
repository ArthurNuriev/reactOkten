import React from 'react';

const PostDetails = ({post}) => {

    const {userId, id, tittle, body} = post;

    return (
        <div style={{color: "red"}}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>tittle: {tittle}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {PostDetails};