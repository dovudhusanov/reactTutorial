import React, {useState} from "react";
import '../../../style/style.css'
import TableList from "./TableList";
import PropsForm from "./PropsForm";
import Select from "./SelectProps/Select";

function PropsTutorial() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'TypeScript', stack: 'MERN stack'},
        {id: 2, title: 'JavaScript', stack: 'Full-Stack'},
        {id: 3, title: 'Goo', stack: 'Back-End'},
        {id: 4 , title: 'Java', stack: 'Back-End'},
    ])

    const [select, setSelect] = useState('')
    
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    // const [title, setTitle] = useState('')
    // const [stack, setStack] = useState('')
    // const inputRef = useRef()
    // const [posts2, setPosts2] = useState([
    //     {id: 1, progLang: 'Html', course: 'Template'},
    //     {id: 2, progLang: 'Css', course: 'Style'},
    //     {id: 3, progLang: 'Bootstrap', course: 'Theme'},
    //     {id: 4, progLang: 'Sass', course: 'Animation'},
    // ])

    const sortPost = (sort) => {
      setSelect(sort)
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <>
            <div className="app mx-auto">
                <PropsForm createPost={createPost} />
                <div className="d-flex justify-content-between my-2">

                    <Select
                        value={select}
                        onChange={sortPost}
                        defaultValue="Sorted by"
                        options={[
                            { value: "title", name: "Programming" },
                            { value: "stack", name: "Stack" }
                        ]}
                    />                    
                </div>
                {posts.length
                    ? <TableList remove={removePost} posts={posts} title="Programming Language"/>
                    : <h4 className="my-3 text-center text-danger">You should add some Post !</h4>
                }
            </div>
            {/*<div className="app w-50 mx-auto">*/}
            {/*    <TableList posts={posts2} title="Free Course"/>*/}
            {/*</div>*/}
        </>
    );
}

export default PropsTutorial