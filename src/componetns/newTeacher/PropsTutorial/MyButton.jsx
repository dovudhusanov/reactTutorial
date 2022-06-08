import React, { useState } from 'react';
import "./PropsStyle.css";

function MyButton({children, onClick, className}) {

    const [btn, setBtn] = useState(false)

    return (
        <button onClick={() => setBtn(!btn)} className={btn ?"blue" :"red"}>
            {children}
        </button>
    );
}

export default MyButton;