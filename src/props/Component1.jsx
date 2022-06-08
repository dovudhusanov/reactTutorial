import React from 'react';

function Component1(props) {
    return (
        <>
            {/* Props Tutorial Function */}
            <h1>
                Salom, mening ismim {props.name},
                men {props.age} yoshdaman
            </h1>
        </>
    );
}

export default Component1;