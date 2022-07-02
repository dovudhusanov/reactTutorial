import React, {useContext} from 'react';
import {Context} from "./CreateContext";

function ContextD(props) {
    const user = useContext()
    return (
        <div>
            <h1 style={{color: '#000'}}>Hello World</h1>
            <Context.Consumer>}
                    <h1>Hello i'm  {user.name}</h1>
                }}
            </Context.Consumer>
            {/*<h1>Hello i'm  {user.name} street number: {user.street.number} street name {user.street.streetName}</h1>*/}
        </div>
    );
}

export default ContextD;