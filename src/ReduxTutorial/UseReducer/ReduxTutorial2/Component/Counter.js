import React from 'react';
import {connect} from "react-redux";
import {dec, inc, rem} from "../redux/action";

function Counter({counter, inc, dec, rem}) {
    return (
        <div className='d-flex mx-3 mt-3'>
            <button className="btn btn-primary" onClick={inc}>Increment+</button>
            <h4 className='mx-3'>count: {counter}</h4>
            <button className="btn btn-danger" onClick={dec}>Decrement-</button>
            <button className="btn btn-secondary mx-3" onClick={rem}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.value,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rem: () => dispatch(rem())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);