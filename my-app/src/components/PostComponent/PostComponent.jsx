import React, {useEffect, useRef} from 'react';
import styles from './PostComponent.module.css'

const PostComponent = () => {

    const postIdRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => console.log('render'));

    const handelSubmit = (e) => {
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/${postIdRef.current.value}/comments`,{
            method: 'POST',
            body: JSON.stringify({
                postId: postIdRef.current.value,
                title: nameRef.current.value,
                email: emailRef.current.value,
                body: bodyRef.current.value
            })})
            .then(value => value.json())
            .then(value => console.log(value))
    }

    return (
        <div className={styles.form}>

            <form onSubmit={handelSubmit}>
                <h3>comment</h3>
                <label>
                    postId:<br/>
                    <input type="text" ref={postIdRef}/>
                </label><br/>
                <label>
                    name:<br/>
                    <input type="text" ref={nameRef}/>
                </label><br/>
                <label>
                    email:<br/>
                    <input type="text" ref={emailRef}/>
                </label><br/>
                <label>
                    body:<br/>
                    <input type="text" ref={bodyRef}/>
                </label><br/><br/>
                <label>
                    <input type="submit" value="submit"/>
                </label>
            </form>
        </div>
    );
};

export {PostComponent};