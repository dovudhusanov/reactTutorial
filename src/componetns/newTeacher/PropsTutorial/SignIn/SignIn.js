import React, {useContext, useEffect, useState} from 'react';
import './SignIn.css'
import {AuthContext,} from "../ContextNew";
// import AlertSuccess from "../Alert/AlertSuccess";

function SignIn(props) {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {btnSign, setBtnSign} = useContext(AuthContext)
    const [userNameValue, setUserNameValue] = useState(null)
    const [userPassValue, setUserPassValue] = useState(null)

       function login(e){
           e.preventDefault()
           if (userNameValue === 'husanovdovudkhon'  && userPassValue === 'developer5067') {
               setIsAuth(true)
               localStorage.setItem('auth', 'true')
               localStorage.setItem('log', setBtnSign('Log out'))

           } else {
              alert('You are not a Admin')
           }
        }
    return (
        <div className="container">
            <div className="github-logo">
                <i className="fa-brands fa-github"></i>
            </div>
            <form onSubmit={login} className="login-wrapper">
                <div className="input-box">
                    <div className="input-label">Username</div>
                    <input
                        value={userNameValue}
                        onChange={e => setUserNameValue(e.target.value)}
                        type="text"
                        required
                    />
                </div>

                <div className="input-box">
                    <div className="input-label">
                        <span>Password</span>
                        <a href="#">Forgot password?</a>
                    </div>
                    <input
                        value={userPassValue}
                        onChange={e => setUserPassValue(e.target.value)}
                        type="password"
                        required
                    />
                </div>

                <button
                    type='submit'
                    className="submit-btn"
                >
                    Submit
                </button>
            </form>

            <div className="info">
                <span>New to GitHub? <a href="#">Create an account.</a></span>
            </div>
        </div>
    );
}

export default SignIn;