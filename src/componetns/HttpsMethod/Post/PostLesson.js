import React, {useEffect, useState} from 'react';
import axios from "axios";

function PostLesson(props) {

    const [post, setPost] = useState(null)

    useEffect(() => {
      const postMethod =  axios.get('https://jsonplaceholder.typicode.com/posts', {

      })
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.error('Error')
            })

    }, [])

    function createPost() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello World',
            body: 'This is post for React in post method'
        })
            .then(response => {
                setPost(response.data)
                console.log(response)
            })
    }

    // if(!post) return 'Loading'

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <button onClick={createPost} className='btn btn-success'>Click to add post</button>
        </div>
    );
}

export default PostLesson;