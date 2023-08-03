import React from 'react';

const Post = ({post}) => {

    const {userId, title} = post

    return (
        <div>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
        </div>
    );
};

export {Post};