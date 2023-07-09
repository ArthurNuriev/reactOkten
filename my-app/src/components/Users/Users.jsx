import React, {useEffect, useState} from 'react';
import {User} from "./User/User";

const Users = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])


    return (
        <div className={"users"}>
            {users?.map((value, index) => {
                return (
                    <>
                        <User key={index} user={value} setUserId = {setUserId}/>
                    </>
                )
            })}
        </div>
    );
};

export {Users};