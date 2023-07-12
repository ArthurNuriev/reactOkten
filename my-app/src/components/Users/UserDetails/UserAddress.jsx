import React from 'react';

const UserAddress = ({user}) => {

    const {street, suite, city} = user.address;

    return (
        <>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p><br/>
        </>
    );
};

export {UserAddress};