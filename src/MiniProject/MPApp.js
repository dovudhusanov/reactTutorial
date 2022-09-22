import React from 'react';
import Login from "./Login/Login";
import {Link} from "react-router-dom";

function MpApp(props) {
    return (
        <div className='navv'>
            <img src="./images/logo.png" alt="" className='logos'/>
            <div className='nav-items'>
                <Link to="/log_in"><button className='btn btn-success'>Log In</button></Link>
                <Link to="/Register"><button className='btn btn-success'>Sign In</button></Link>
            </div>
        </div>
    );
}

export default MpApp;