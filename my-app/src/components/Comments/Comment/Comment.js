import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {urls} from "../../../constants/urls";
import {postsService} from "../../../services/postsService";
import {PostDetails} from "../../Post/PostDetails/PostDetails";
import {Button} from "@mui/material";

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate();
    const [post, setPost] = useState(null)
    const [flag, setFlag] = useState(null)


    const showPost = () => {
        postsService.getAll(postId).then(({data}) => {
            setPost(data)
            setFlag(prev => !prev)
        })
    };

    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <Button variant="contained" onClick={() => {
                navigate(`${urls.posts.url}/${postId}`)
            }}>get post</Button> &nbsp;

            <Button variant="contained" onClick={showPost}>show post</Button>
            <hr/>

            {flag && post && <PostDetails post={post}/>}

        </div>
    );
};

export {Comment};