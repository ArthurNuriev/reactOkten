import React from 'react';

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website} = user;

    return (
        <>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p><br/>
        </>
    );
};

export {UserDetails};