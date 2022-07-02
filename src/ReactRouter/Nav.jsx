import React, {useState, useContext} from 'react';
import Style from "../style/style.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../componetns/newTeacher/PropsTutorial/ContextNew";

function Nav() {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {btnSign, setBtnSign} = useContext(AuthContext)
    const logOut = () => {
      setIsAuth(false)
      localStorage.clear()
      setBtnSign('Sign In')
    }

    return(
        <div className='navigation'>
           <div className='nav'>
               <Link to='/' className='logo'>Logo</Link>
               <ul className='list-items'>
                   <li>
                       <Link to='/react-router'>Router</Link>
                   </li>
                   <li>
                       <Link to='/About'>About</Link>
                   </li>
                   <li>
                       <button
                           className='btn btn-primary'
                           onClick={logOut}
                       >
                           <Link to='/login' >{btnSign}</Link>
                       </button>
                   </li>
               </ul>
           </div>
        </div>
    )
}

export default Nav