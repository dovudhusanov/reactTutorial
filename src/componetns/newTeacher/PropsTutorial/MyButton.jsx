import React, {useState} from 'react';
import "./PropsStyle.css"

function MyButton({children, onClick, className}) {
    const [click, setClick] = useState(false)
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
        // <button className={click?"red" : "blue"} onClick={() => setClick(!click)}>Click</button>
    );
}

export default MyButton;