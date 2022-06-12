import React, {useState, useMemo, Children} from "react";
import '../../../style/style.css'
import TableList from "./TableList";
import PropsForm from "./PropsForm";
import SearchAndFilter from "./SearchAndFilter";
import Modal from "./Modal/Modal";
import BtnPrimary from "./Button/BtnPrimary";

function PropsTutorial() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'TypeScript', stack: 'MERN stack'},
        {id: 2, title: 'JavaScript', stack: 'Full-Stack'},
        {id: 3, title: 'Goo', stack: 'Back-End'},
        {id: 4 , title: 'Java', stack: 'Back-End'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    // function getSortedPosts() {
    //     if(select) {
    //         return setPosts([...posts].sort((a, b) => a[select].localeCompare(b[select])))
    //     }
    //     return posts
    // }

    // const sortedPosts = getSortedPosts()
    
    const SortedPosts = useMemo(() => {
        console.log('render')
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        if (filter){
            return SortedPosts.filter(
                post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
            )
        }else if (filter) {
            return SortedPosts.filter(
                post => post.stack.toLocaleLowerCase().includes(filter.sort.toLocaleLowerCase())
            )
        } return filter.sort
    }, [filter.query, filter.sort, SortedPosts])




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
            <div className="app mx-auto">
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
                {sortedAndSearchPosts.length
                    ? <TableList
                        remove={removePost}
                        posts={sortedAndSearchPosts}
                        title="Programming Language"
                    />
                    : <h4
                        className="my-3 text-center text-danger">
                        Not Found
                    </h4>
                }
            </div>
            {/*<div className="app w-50 mx-auto">*/}
            {/*    <TableList posts={posts2} title="Free Course"/>*/}
            {/*</div>*/}
        </>
    );
}

export default PropsTutorial