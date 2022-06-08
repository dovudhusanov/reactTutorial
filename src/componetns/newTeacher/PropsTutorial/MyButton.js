import React from 'react';
import "./PropsStyle.css"

function MyButton({children, onClick, className}) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}

export default MyButton;