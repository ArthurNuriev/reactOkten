import React, {useEffect, useState} from 'react';

import {todosService} from "../../services/todosService";
import {Todo} from "./Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect( () => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, [])

    return (
        <div>
            {todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
        </div>
    );
};

export {Todos};
