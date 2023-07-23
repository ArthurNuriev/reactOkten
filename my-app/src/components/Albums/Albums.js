import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albumsService";
import {Album} from "./Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect( () => {
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    }, [])

    return (
        <div>
            {albums.map((album, index) => <Album key={index} album={album}/>)}
        </div>
    );
};

export {Albums};