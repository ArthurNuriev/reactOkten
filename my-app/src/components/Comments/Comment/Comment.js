import React from 'react';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className={"todo"}>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export {Comment};