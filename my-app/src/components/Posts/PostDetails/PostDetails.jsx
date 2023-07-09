// import styles from "../Post/Post.module.css"
const PostDetails = (props) => {
    const {userId, id, title, body} = props.post;

    return (
        <div>
            <hr/>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    )
}
export default PostDetails;

