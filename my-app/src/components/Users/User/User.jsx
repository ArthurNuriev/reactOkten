import {UserDetails} from "../UserDetails/UserDetails";
import {UserAddress} from "../UserDetails/UserAddress";
import {Company} from "../UserDetails/Company";
const User = ({user, showPosts}) => {
    const {id} = user;

    return (
        <div className={"user"}>
            <p>User {id}</p>
            <button onClick={() => showPosts(id)}>show posts</button><br/><br/>
            <UserDetails user = {user}/>
            <UserAddress user = {user}/>
            <Company user = {user}/>
        </div>
    );
};

export {User};