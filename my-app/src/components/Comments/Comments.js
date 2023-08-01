import React from 'react';
import {commentService} from "../../service/apiService/commentService";
import {Comment} from "./Comment/Comment";

class Comments extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({comments: data}))
    }


    render() {
        return(
            <div>{this.state.comments.map((comment, index)=><Comment key={index} comment={comment}/>)}</div>

        )
    }
}

export {Comments};