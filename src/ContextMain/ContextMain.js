import React from 'react';
import ContextA from "./ContextA";
import UserContext from "./UserContext";

function ContextMain(props) {
    const name = {
        name: 'Dovudxon',
        lastName: 'Husnov',
        dev: 'Developer'
    }
    return (
        <div>
            <UserContext.Provider value={name}>
                <ContextA />
            </UserContext.Provider>
        </div>
    );
}

export default ContextMain;