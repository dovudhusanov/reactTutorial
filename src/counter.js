import React, {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0)

    function add() {
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
    }

    return(
        <>
            <h1>{count}</h1>
            <button
                className='btn btn-success'
                onClick={add}
            >
                Add
            </button>
        </>
    )
}

export default Counter