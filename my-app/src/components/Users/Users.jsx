import React from 'react';
import {User} from "./User/User";

const Users = ({users, showPosts}) => {

    return (
        <div>
            {users.map((user,id)=>{
                return (
                    <User key ={id} user={user} showPosts={showPosts}/>
                )
            })}
        </div>
    );
};

export {Users};