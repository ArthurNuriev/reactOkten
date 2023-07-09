import './App.css';
import Posts from "./components/Posts/Posts";
import {Flights} from "./components/ Flights/Flights";
import {Users} from "./components/Users/Users";
import {UserPosts} from "./components/Users/UserPosts/UserPosts";
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(null)
    return (
        <div className="Appp">

            <Posts/>
            <Flights/>
            <Users setUserId = {setUserId}/>

            {userId && <UserPosts userId = {userId}/>}

        </div>
    );
}

export default App;
