import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function PwaApp(props) {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [postId, setPostId] = useState("")
    const [value, setValue] = useState({
        title: "",
        body: ""
    })


    const api = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => {
                setData(data.data.slice(0, 5))
                console.log(data.data)
            })
            .catch(error => console.error("Error", error))
    }

    useEffect(() => {
        api()
    }, [])

    const modalRef = useRef(null)

    if (!data) return <h1>Loading...</h1>

    const addPost = async (e) => {
        e.preventDefault()
        console.log(value)
        const datas = await axios.post("https://reqres.in/api/articles", value)
        console.log(datas)
    }

    const update = (data, index) => {
        setValue({...value, title: data.title, body: data.body})
        setPostId(index + 1)
        modalRef.current.classList.add("active")
    }

    const close = () => {
        modalRef.current.classList.remove("active")
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const deletePost = (id) => {
        setData(data.filter(data => data.id !== id))
    }

    return (
        <div>
            <h1 className="d">Xusniddin Dedaxanov</h1>
            {Object.keys(data).length === 0 ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="d-flex justify-content-center">
                        <img src="./icon/android-launchericon-192-192.png" alt=""/>
                    </div>
                    {data.map((data, index) => (
                        <div className='mainc' key={data.id}>
                            <b>{index + 1}</b>
                            <h3 className="atitle">{data.title}</h3>
                            <p className="atitle">{data.body}</p>
                            <div>
                                <button className="btn btn-success" onClick={() => update(data, index)}>Update</button>
                                <button className="btn btn-danger mx-3"
                                        onClick={() => deletePost(data.id)}>Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
            <div className="m top-0 position-fixed h-100 w-100" style={{background: "rgba(0, 0, 0, 0.18)"}}
                 ref={modalRef}>
                <div className="bg-white w-50 h-50 position-relative" style={{top: 200, left: 350}}>
                    <form onSubmit={addPost} className="position-relative pt-3 container">
                        <h3>{postId}</h3>
                        <input type="text"
                               placeholder="Title"
                               name="title"
                               onChange={handleChange}
                               value={value.title}
                               className="form-control w-75 my-2"
                        />
                        <textarea
                            placeholder="Body"
                            name="body"
                            onChange={handleChange}
                            value={value.ody}
                            className="form-control w-75 my-2"
                            style={{height: 150}}
                        />
                        <button className='btn btn-success'>Save</button>
                        <button className="btn btn-danger position-absolute" style={{top: 10, right: 10}}
                                onClick={close}>Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PwaApp;