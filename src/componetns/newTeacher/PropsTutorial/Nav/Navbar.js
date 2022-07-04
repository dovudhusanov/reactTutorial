import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css'

function Navbar(props) {
    return (
        <header className="headerr bg-success">
            <nav className="navv">
                <Link to='/'><h1 className='logoo'>Router</h1></Link>
                    <ul className="nav-listt pt-3">
                        <li className="list-itemss"><Link to="/posts">Posts</Link></li>
                        <li className="list-itemss"><Link to="/about">About</Link></li>
                        <li className="list-itemss"><Link to="/services">Services</Link></li>
                        <li className="list-itemss"><Link to="/blog">Blog</Link></li>
                        <li className="list-itemss"><Link to="/contact">Contact</Link></li>
                        <button className='btn btn-danger'>Log In</button>
                    </ul>
            </nav>
        </header>
    );
}

export default Navbar;