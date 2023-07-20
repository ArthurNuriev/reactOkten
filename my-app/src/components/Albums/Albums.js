import React, {useEffect, useState} from 'react';
import {Album} from "./album/Album";
import {albumService} from "../../services/albumService";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums(data))
    },[])


    return (
        <div>
            {albums.map((album, index) => {
                return(
                    <Album key={index} album={album}/>
                )
            })}
        </div>
    );
};

export {Albums};