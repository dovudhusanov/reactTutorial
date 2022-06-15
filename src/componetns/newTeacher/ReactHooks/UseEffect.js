import React, {useEffect, useState} from "react"

function UseEffect() {

    const [user, setUser] = useState('users')

    const [data, setData] = useState([])

    // useEffect(() => {
    //     console.log(`render ${user}`)
    // }, [user])

    useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [user])

    return(
        <>
            <h1 className='text-center'>Users: {user}</h1> nimaga unaqa qilissan
            <div className='btn-group'>
                <button className='btn btn-success' onClick={() => setUser(setData.name)}> Users </button>
                <button className='btn btn-danger' onClick={() => setUser("posts")}> Posts </button>
                <button className='btn btn-secondary' onClick={() => setUser("todos")}> Todos </button>
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <p>color a</p>
        </>
    )
}

export default UseEffect