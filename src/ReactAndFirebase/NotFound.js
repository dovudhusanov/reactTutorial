import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

function NotFound(props) {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/404")
    }, [window.location.pathname])

    return (
        <div className='text-center mt-5'>
            <h2 className='text-danger'>404 Page not found!</h2>
            <button className='btn btn-success text-white mt-3'><Link to='/' className='text-white text-decoration-none'>back to  Home</Link></button>
        </div>
    );
}

export default NotFound;