import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)

    const [infosType, setInfosType] = useState('posts')
    useEffect(() => {
        document.title = `Siz ${count} marta bosdingiz`
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
            .then((response) => response.json())
            .then(res => console.log(res))
    })

    return(
        <>
            <p>Siz {count} marta bosdingiz</p>
            <button onClick={() => setCount(count + 1)}>Click to +</button>
            <button onClick={() => setCount(count - 1)}>Click to -</button>
            <button onClick={() => setCount(0)}>remove</button>

            {/*<button onClick={() => setInfosType('users')}>Users</button>*/}
            {/*<button onClick={() => setInfosType('comments')}>Comments</button>*/}
            {/*<button onClick={() => setInfosType('todos')}>Todos</button>*/}
        </>
    )
}

export default UseEffect