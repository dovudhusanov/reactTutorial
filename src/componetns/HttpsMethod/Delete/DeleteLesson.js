import React, {useEffect, useState} from 'react';
import axios from "axios";

function DeleteLesson(props) {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setPost(res.data)
                console.log(res)
            })
    }, [])

    async function deletePost() {
        await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(() => {
                alert('Post deleted');
                setPost(null)
            })
    }

    if (!post) return 'No Posts!'

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={deletePost} className='btn btn-danger'>Delete Post</button>
        </div>
    );
}

export default DeleteLesson;