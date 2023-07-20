import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todoService";
import {Todo} from "./todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data))
    },[])


    return (
        <div>
            {todos.map((todo, index) => {
                return(
                    <Todo key={index} todo={todo}/>
                )
            })}
        </div>
    );
};

export {Todos};