import React, {useRef, useState} from "react";
import '../../../style/style.css'
import TableList from "./TableList";
import BtnPrimary from "./Button/BtnPrimary";
import Input from "./Input/Input";

function PropsTutorial() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'TypeScript', stack: 'MERN stack'},
        {id: 2, title: 'JavaScript', stack: 'Full-Stack'},
        {id: 3, title: 'Goo', stack: 'Back-End'},
        {id: 4, title: 'Java', stack: 'Back-End'},
    ])

    const [post, setPost] = useState({title: '', stack: ''})
    // const [title, setTitle] = useState('')
    // const [stack, setStack] = useState('')
    // const inputRef = useRef()
    
    const addPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id:Date.now()}])
        setPost({title: "", stack: ""})
        // setTitle(e.target.value = '')
        // console.log(title)
        // console.log(inputRef.current.value)
    }

    // const [posts2, setPosts2] = useState([
    //     {id: 1, progLang: 'Html', course: 'Template'},
    //     {id: 2, progLang: 'Css', course: 'Style'},
    //     {id: 3, progLang: 'Bootstrap', course: 'Theme'},
    //     {id: 4, progLang: 'Sass', course: 'Animation'},
    // ])

    return (
        <>
            <div className="app mx-auto">
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
                <TableList posts={posts} title="Programming Language"/>
            </div>
            {/*<div className="app w-50 mx-auto">*/}
            {/*    <TableList posts={posts2} title="Free Course"/>*/}
            {/*</div>*/}
        </>
    );
}

export default PropsTutorial