import React from 'react';

function BtnPrimary({children, ...props}) {
    return (
        <div className='text-center'>
            <button {...props} className="btn btn-primary w-75">
                {children}
            </button>
        </div>
    );
}

export default BtnPrimary;