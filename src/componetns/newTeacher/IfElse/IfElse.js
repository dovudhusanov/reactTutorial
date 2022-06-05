import React, { useState } from "react";
import Style from '../../../style/style.css';

function IfElse() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <button className='btn btn-secondary' onClick={() => setToggle(!toggle)}>Toggle Btn</button>
            <hr/>
            {toggle
                ? <p className="lead">
                    Youtube Content
                </p>
                : null
            }
        </>
    )
}

export default IfElse