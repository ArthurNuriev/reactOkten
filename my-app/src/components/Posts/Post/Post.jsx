import styles from "./Post.module.css";
import {useState} from "react";
import PostDetails from "../PostDetails/PostDetails";
const Post = (props) => {
    const [isShow, setIsShow] = useState(false);
    const {post} = props;

    return (
        <div className={styles.post}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <button onClick={()=>setIsShow(prev => !prev)}>{isShow? 'hide': 'show'}</button>
            {
                isShow && <PostDetails post = {post}/>
            }
        </div>
    )
}
export default Post;

