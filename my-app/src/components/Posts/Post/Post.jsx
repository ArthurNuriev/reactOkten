import React from 'react';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={"posts"}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Post};