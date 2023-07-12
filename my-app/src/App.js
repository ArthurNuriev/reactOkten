import './App.css';
import {createContext, useEffect, useState} from "react";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Child1} from "./components/Children/Child1/Child1";
import {Child2} from "./components/Children/Child2/Child2";

export const Context = createContext(null);

function App() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(null);
    const [text, setText] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [id])

    const showPosts = (id) => {
        setId(id)
    }
    const showText = (text) => {
        setText(text)
    }

    return (
        <div className="App">
            <Users users={users} showPosts={showPosts}/>
            {id && <Posts posts={posts}/>}

            <Context.Provider value={{showText, text}}>
                <Child1/>
                <Child2/>
            </Context.Provider>

        </div>
    );
}

export default App;
