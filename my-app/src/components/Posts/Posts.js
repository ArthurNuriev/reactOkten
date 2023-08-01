import React from 'react';
import {postService} from "../../service/apiService/postService";
import {Post} from "./Post/Post";

class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map((post, index) => <Post key={index} post={post}/>)}
            </div>
        )
    }
}


export {Posts};