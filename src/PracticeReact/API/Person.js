import React, {useEffect, useState} from 'react';
import axios from "axios";


function Person(props) {
    //CRUD
    // read
    const [data, setData] = useState([])

    const date = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => {
                setData(data.data.slice(0, 9))
            })
            .catch(error => console.error("Error", error))
    }

    useEffect(() => {
        date()
    }, [])

    // create

    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const datas = await axios.post("https://jsonplaceholder.typicode.com/posts", formData)
        setData(datas)
    }

    function handleUser(user) {
        console.log(user)
        setFormData({title: user.title.slice(0, 5), body: user.body.slice(0, 5)})
    }


    function deleteUser(id) {
        setData(data.filter(user => user.id !== id))
    }

    return (
        <div>
            {data?.map((data) => (
                <div key={data?.id}>
                    <h1>{data?.title}</h1>
                    <h3>{data?.body}</h3>
                    <button onClick={() => handleUser(data)}> Updateaa</button>
                    <button onClick={() => deleteUser(data?.id)}>Delete</button>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Name"
                       onChange={handleChange}
                       name={"title"}
                       value={formData.title}/>
                <input type="text"
                       placeholder="text"
                       onChange={handleChange}
                       name={"body"}
                       value={formData.body}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Person;