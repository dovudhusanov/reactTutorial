import React from 'react';
import App from "./Component/App";
// import {dec, inc, rem} from "./redux/action";
// import Counter from "./Component/Counter";

function ReduxApp2() {
    // const {dispatch, subscribe, getState} = store
    //
    // const bindActionCreator = (creator, dispatch) => (...args) => {
    //     dispatch(creator(...args))
    // }
    //
    // const incHandler = bindActionCreator(inc, dispatch)
    // const decHandler = bindActionCreator(dec, dispatch)
    // const remHandler = bindActionCreator(rem, dispatch)

    return (
        <>
            <App />
        </>
    );
}

export default ReduxApp2;