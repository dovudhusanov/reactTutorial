import React from 'react';
import './Btn.css';

function BtnOutlineDanger({children, ...props}) {
    return (
        <button {...props} className="btn btn-outline-danger w-100">
            {children}
        </button>
    );
}

export default BtnOutlineDanger;