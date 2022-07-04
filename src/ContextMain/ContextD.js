import React, {useContext, useState} from 'react';
import UserContext from "./UserContext";

function ContextD(props) {

    const user = useContext(UserContext)

    return (
        <div>
            {/* Context Consumer */}
            {/*<UserContext.Consumer>*/}
            {/*    {(user, child) => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                <h1 className='mt-5'>Hello i'm{user.name}</h1>*/}
            {/*                <h2 className='mt-5'>I'm in this moment {user.dev}</h2>*/}
            {/*                <h3 className='mt-5'>Oops i'm is my lastName is {user.lastName}</h3>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*</UserContext.Consumer>*/}

            {/* UseContext */}
            <div>
                <h1 className='mt-5'>Hello i'm{user.name}</h1>
                <h2 className='mt-5'>I'm in this moment {user.dev}</h2>
                <h3 className='mt-5'>Oops i'm is my lastName is {user.lastName}</h3>
            </div>
        </div>
    );
}

export default ContextD;