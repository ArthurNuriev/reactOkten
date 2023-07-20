import React from 'react';

const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className={"todo"}>
            <p>completed: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>completed: {completed.toString()}</p>
            <hr/>
        </div>
    );
};

export {Todo};