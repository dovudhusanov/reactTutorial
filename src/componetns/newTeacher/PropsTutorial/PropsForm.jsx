import React, {useState} from 'react';
import Input from "./Input/Input";
import BtnPrimary from "./Button/BtnPrimary";

function PropsForm({createPost}) {

    const [post, setPost] = useState({title: '', stack: ''})
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({title: "", stack: ""})
        // setTitle(e.target.value = '')
        // console.log(title)
        // console.log(inputRef.current.value)
    }
    return (
        <form>
            <h5 className='text-center'>Create your first post</h5>
            <Input
                type="text"
                className="form-control"
                placeholder="Programming Language"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Input
                type="text"
                className="form-control my-3"
                placeholder="Enter your favourite stack"
                value={post.stack}
                onChange={e => setPost({...post, stack: e.target.value})}
                // ref={inputRef}
            />
            <BtnPrimary onClick={addPost}>
                Add Post
            </BtnPrimary>
        </form>
    );
}

export default PropsForm;