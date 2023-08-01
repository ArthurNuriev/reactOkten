import React from 'react';

class Comment extends React.Component{

    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        
        const {postId, id, name, body} = this.props.comment;
        
        return(
            <div>
                <p>postId: {postId}</p>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>body: {body}</p>
                <hr/>
            </div>
        )
    }

}



export {Comment};