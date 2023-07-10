import {useEffect, useState} from "react";
import Post from "./Post/Post";
const Posts = () => {

    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])

    return (
        <div className='posts'>
            {post?.map((post, id) => {
                return (
                    <Post key={id} post={post}/>
                )
            })}
        </div>
    )
}
export default Posts;