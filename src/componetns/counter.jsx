import React, {useState} from "react";

function Count() {
    const [count, setCount] = useState(0)
    return(
        <>
            <h1 className="count">Counter</h1>
            <p>{count}</p>
            <button className="btnAdd" onClick={() => setCount(count + 1)}>+</button>
            <button className="btnMin" onClick={() => setCount(count - 1)}>-</button>
            <button className="btnRem" onClick={() => setCount(0)}>remove</button>
        </>
    );
};

export default Count