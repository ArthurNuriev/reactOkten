import React from 'react';
import {Link} from "react-router-dom";
import {AppRouters} from "../../routing/AppRouters";

const Header = () => {
    return (
        <div style={{width: '100%', height: '80px', backgroundColor:"#b4bbbb",display:'flex', justifyContent: 'space-around', alignItems:'center', fontSize: '20px' }}>
            <Link to={AppRouters.TODOS}>TODOS</Link>
            <Link to={AppRouters.ALBUMS}>ALBUMS</Link>
            <Link to={AppRouters.COMMENTS}>COMMENTS</Link>
        </div>
    );
};

export {Header};