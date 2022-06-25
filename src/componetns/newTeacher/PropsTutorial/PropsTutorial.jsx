import React, {useState, useMemo, Children, useEffect} from "react";
import '../../../style/style.css'
import TableList from "./TableList";
import PropsForm from "./PropsForm";
import SearchAndFilter from "./SearchAndFilter";
import Modal from "./Modal/Modal";
import BtnPrimary from "./Button/BtnPrimary";
import axios from "axios";
import PostsServiseApi from "../API/PostsServiseApi";
import searchAndFilter from "./SearchAndFilter";
import {useFetching} from "../ReactHooks/HookTask/MyHook/UseFetching";

function PropsTutorial() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalNumber, setTotalNumber] = useState(0)
    const [fetchPosts, isLoading, postError] = useFetching( async () => {
        const post = await PostsServiseApi.getAllPosts()
        setPosts(post)
    })

    useEffect(() => {
        fetchPosts().then(r => r)
    }, [])

    // function getSortedPosts() {
    //     if(select) {
    //         return setPosts([...posts].sort((a, b) => a[select].localeCompare(b[select])))
    //     }
    //     return posts
    // }

    // const sortedPosts = getSortedPosts()
    
    const SortedPosts = useMemo(() => {
        console.log('render')
        console.log(posts)
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        if (filter){
            return SortedPosts.filter(
                post => post.body.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
            ); setTotalNumber(SortedPosts.length)
        }return filter.sort
    }, [filter.query, filter.sort, SortedPosts])


    // async function fetchPost() {
    //     const posts = await PostsServiseApi.getAllPosts()
    //     console.log(posts.data)
    // }

    // const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post => {
        setPosts(posts.filter(s => s.id !== post.id))
    })

    // const [title, setTitle] = useState('')
    // const [stack, setStack] = useState('')
    // const inputRef = useRef()
    // const [posts2, setPosts2] = useState([
    //     {id: 1, progLang: 'Html', course: 'Template'},
    //     {id: 2, progLang: 'Css', course: 'Style'},
    //     {id: 3, progLang: 'Bootstrap', course: 'Theme'},
    //     {id: 4, progLang: 'Sass', course: 'Animation'},
    // ])


    return (
        <>
            <div className="app mx-auto w-75">
                <BtnPrimary
                    onClick={() => setModal(true)}
                    className='btn'>
                    Add Posts</BtnPrimary>
                <Modal
                    modal={modal}
                    setModal={setModal}>
                    <PropsForm
                        createPost={createPost}
                    />
                </Modal>
                <SearchAndFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {isLoading
                    ? <div className='loader'>
                            <div className='cercleLoader an-1'></div>
                            <div className='cercleLoader an-2'></div>
                            <div className='cercleLoader an-3'></div>
                        </div>
                    : <TableList
                    remove={removePost}
                    posts={sortedAndSearchPosts}
                    title="Programming Language"
                    />
                }
            </div>
            {/*<div className="app w-50 mx-auto">*/}
            {/*    <TableList posts={posts2} title="Free Course"/>*/}
            {/*</div>*/}
        </>
    );
}

export default PropsTutorial