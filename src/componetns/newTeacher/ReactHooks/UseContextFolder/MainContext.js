import React from 'react';
import ContextA from "./ContextA";
import {Context} from "./CreateContext";
import ContextC from "./ContextC";
import ContextB from "./ContextB";


function MainContext(props) {

    const name = {
        name: 'Developer',
        age: 16,
        profession: 'Web developer',
        street: {
            streetName: 'T Malik',
            number: 30
        }
    }
    return (
        <div>
            <Context.Promise value={name}>
                <ContextA />
            </Context.Promise>
        </div>
    );
}

export default MainContext;