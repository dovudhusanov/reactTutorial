import React from 'react';

function BtnPrimary({children, ...props}) {
    return (
        <div className='d-flex'>
            <button {...props} className="btn btn-success">
                {children}
            </button>
        </div>
    );
}

export default BtnPrimary;