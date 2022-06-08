import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0)

    return(
        <>
            <h1>Hello</h1>
            {/*<span>{count}</span>*/}
            {/*<button onClick={() => setCount(count + 1)}>+</button>*/}
            {/*<button onClick={() => setCount(count -1)}>-</button>*/}
            {/*<button onClick={() => setCount(0)}>res</button>*/}
        </>
    )
}

export default UseState