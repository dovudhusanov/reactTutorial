import React, {useEffect, useState} from 'react';
import axios from "axios";

function GetLesson(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                console.log(res)
            })
            .catch(err => {
                console.error('Error')
            })
    }, [])

    return (
        <div>
            {users.map(userName => (
                <h1 key={userName.id}>{userName.name}</h1>
            ))}
        </div>
    );
}

export default GetLesson;