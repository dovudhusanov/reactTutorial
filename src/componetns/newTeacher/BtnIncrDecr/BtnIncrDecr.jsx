import React, { useState } from "react";

function BtnIncrDecr() {
    const [count, setCount] = useState(0);
    return (
        <> 
            <h3>Count : {count}</h3>
            <button className='btn btn-success' onClick={() => setCount(count + 1)}>Incr</button>
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>-</button>
            <button className='btn btn-primary' onClick={() => setCount(0)}>cls</button>
        </>
    )
}

export default BtnIncrDecr