import React, {useEffect, useState} from 'react';
import axios from "axios";
import joke from "./componetns/skeletonTutorial/Joke";
//https://dovudxon-api.herokuapp.com/api/user/all hamma user
//https://dovudxon-api.herokuapp.com/api/user/create post user {name,email,password}
//https://dovudxon-api.herokuapp.com/api/user/:id patch => {name,email,password}
//https://dovudxon-api.herokuapp.com/api/user/:id => delete

const axiosCreateInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
    }
})

function Api() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState(undefined)
    const [value, setValue] = useState({
        name: "",
        email: "",
        job: ""
    })

    const apiReq = async () => {
        await axiosCreateInstance.get("/user/all")
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
    }

    useEffect(() => {
        apiReq()
    }, [isLoading])

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        console.log(userId)
        await axios.post("http://localhost:5000/api/user/create", value)
        setValue({
            name: "",
            email: "",
            job: ""
        })
        setIsLoading(true)
    }

    async function userUpdate() {
        await axios.patch(`http://localhost:5000/api/user/${userId}`, value)
        setValue({name: "", email: '', job: ''})
        setUserId(undefined)
        setIsLoading()
    }

    const handleDelete = async (id) => {
        setData(data.filter(user => user._id !== id))
        await axios.delete(`http://localhost:5000/api/user/${id}`)
    }

    const handleUpdate = async (data) => {
        setValue({
            name: data.name,
            email: data.email,
            job: data.job
        })
        setUserId(data._id)
    }

    return (
        <div>
            <form className="my-3" onSubmit={handleCreate}>
                <div className='mx-3 my-3'>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className='form-control w-25'
                        onChange={handleChange}
                        value={value.name}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control w-25 my-2"
                        onChange={handleChange}
                        value={value.email}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Job"
                        name="job"
                        className="form-control w-25"
                        onChange={handleChange}
                        value={value.job}
                        required
                    />
                </div>
                {userId === undefined ? <button type={"submit"} className="btn btn-primary mx-3 text-white"> Create </button> :
                    <button type={"button"} onClick={userUpdate} className="btn btn-success mx-3 text-white"> Update</button>}
            </form>
            <div className='d-flex justify-content-around flex-wrap'>
                {data.length === 0 ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        {data.map((data, index) => (
                            <div key={index + 1} className='mx-3 mt-5 box'>
                                <div className='mx-3'>
                                    <h4>{data.name}</h4>
                                    <h6>{data.email}</h6>
                                    <h5>{data.job}</h5>
                                </div>
                                <button className='btn btn-success text-white mx-3'
                                        onClick={() => handleUpdate(data)}>Update
                                </button>
                                <button className='btn btn-danger text-white'
                                        onClick={() => handleDelete(data._id)}>Delete
                                </button>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Api;