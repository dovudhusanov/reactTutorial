import React, {useContext} from 'react';
import Login from "./Login/Login";
import {Link} from "react-router-dom";
import {AuthContext2} from "./context/auth-context";

function MpApp(props) {
    const {Logout} = useContext(AuthContext2)

    async function handleLogout(){
        await Logout()
    }

    return (
        <div className='navv'>
            <img src="./images/logo.png" alt="" className='logos'/>
            <div className='nav-items'>
                <Link to="/users"><button className='btn btn-success'>Users</button></Link>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default MpApp;