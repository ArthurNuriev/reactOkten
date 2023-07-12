import React from 'react';

const Company = ({user}) => {

    const {name, catchPhrase, bs} = user.company;

    return (
        <>
            <p>name: {name}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>

        </>
    );
};

export {Company};