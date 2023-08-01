import React from 'react';

class Post extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        const {userId, id, title, body} = this.props.post;

        return (
            <div>
                <p>userId: {userId}</p>
                <p>id: {id}</p>
                <p>title: {title}</p>
                <p>body: {body}</p>
                <hr/>
            </div>
        )
    }
}


export {Post};