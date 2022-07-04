import React from 'react';
import ContextB from "./ContextB";

function ContextA(props) {
    return (
        <div>
            <ContextB />
        </div>
    );
}

export default ContextA;