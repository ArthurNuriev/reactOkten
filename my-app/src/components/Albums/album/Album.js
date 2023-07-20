import React from 'react';

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={"todo"}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <hr/>
        </div>
    );
};

export {Album};