

const User = ({user, setUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div className={"user"}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>

            <button onClick={()=>{setUserId(id)} }>click</button>
        </div>
    );
};

export {User};