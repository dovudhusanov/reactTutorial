import React, {useState, useMemo, Children, useEffect} from "react";
import '../../../style/style.css'
import PropsForm from "./PropsForm";
import SearchAndFilter from "./SearchAndFilter";
import axios from "axios";
import PostsServiseApi from "../API/PostsServiseApi";
import searchAndFilter from "./SearchAndFilter";
import {useFetching} from "../ReactHooks/HookTask/MyHook/UseFetching";
import Modal from "./UI/Modal/Modal";
import BtnPrimary from "./UI/Button/BtnPrimary";
import TableList from "./UI/Table/TableList";
import {getPageArray, getPageCount} from "./UI/utils/page";
import BtnSuccess from "./UI/Button/BtnSuccess";
import Navbar from "./Nav/Navbar";
import Nav from "../../../ReactRouter/Nav";

function PropsTutorial() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [totalNumber, setTotalNumber] = useState(0)
    const pageArray = getPageArray(totalPage)
    const [fetchPosts, isLoading, postError] = useFetching( async () => {
        const response = await PostsServiseApi.getAllPosts(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts().then(r => r)
        PostsServiseApi.getAllPosts(limit, page)
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
            );
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
                    Add Posts
                </BtnPrimary>
                <Nav />
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
                {postError && <p className='text-danger p-5 font-monospace' style={{fontSize: 30}}>Error</p>}
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
                <ul className='pagination'>
                    {pageArray.map(item => (
                       <button
                           key={item}
                           className={page === item ? 'btn btn-primary' : 'btn btn-outline-primary'}
                           onClick={() => setPage(item)}
                       >
                           {item}
                       </button>
                    ))}
                </ul>
            </div>
            {/*<div className="app w-50 mx-auto">*/}
            {/*    <TableList posts={posts2} title="Free Course"/>*/}
            {/*</div>*/}
        </>
    );
}

export default PropsTutorial