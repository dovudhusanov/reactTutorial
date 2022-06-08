import React from 'react';
import Style from "../style/style.css"
import {Link} from "react-router-dom";

function Nav() {
    return(
        <>
           <div className='nav'>
               <Link to='/' className='logo'>Logo</Link>

               <ul className='list-items'>
                   <li>
                       <Link to='/ReactRouter'>Router</Link>
                   </li>
                   <li>
                       <Link to='/About'>About</Link>
                   </li>
               </ul>
           </div>
        </>
    )
}

export default Nav