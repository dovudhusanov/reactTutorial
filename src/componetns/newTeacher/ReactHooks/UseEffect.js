import React, {useEffect, useState} from "react"

function UseEffect() {

    const [user, setUser] = useState('users')

    const [data, setData] = useState([])
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    // useEffect(() => {
    //     console.log(`render ${user}`)
    // }, [user])
    //
    // useEffect(() => {
    //      fetch(`https://jsonplaceholder.typicode.com/${user}`)
    //         .then(response => response.json())
    //         .then(json => setData(json))
    //
    //     return () => {
    //         console.log("Clean...")
    //     }
    // }, [user])
    useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [user])

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setPosition(
                {
                    x: e.clientX,
                    y: e.clientY
                }
            )
        })
    }, [position])
    return(
        <>
            <h1 className='text-truncate'>Users: {user}</h1>
            <div className='btn-group'>
                <button className='btn btn-success' onClick={() => setUser("users")}> Users </button>
                <button className='btn btn-danger' onClick={() => setUser("posts")}> Posts </button>
                <button className='btn btn-secondary' onClick={() => setUser("todos")}> bot </button>
            </div>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(position, null, 2)}</pre>
                <button className='btn btn-danger' onClick={() => setUser("imaged")}> Posts </button>
            <h1 className='text-center'>Users: {user}</h1> nimaga unaqa qilissan
            <div className='btn-group'>
                <button className='btn btn-success' onClick={() => setUser(setData.name)}> Users </button>
                <button className='btn btn-danger' onClick={() => setUser("posts")}> Posts </button>
                <button className='btn btn-secondary' onClick={() => setUser("todos")}> Todos </button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    )
}

export default UseEffect