import {useContext, useEffect, useRef, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";
import {AuthContext2} from "../context/auth-context";

import axios from "../../api/Auth";

const LOGIN_URL = "/api/auth/login";

const Login = () => {
    const {Login} = useContext(AuthContext2)
    const userRef = useRef(null)
    const errRef = useRef(null)

    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPwd, setShowPwd] = useState(false)

    const showPwdFunc = () => {
        setShowPwd(true)
    }

    const hidePwd = () => {
        setShowPwd(false)
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        Login(value)
    }

    return (
        <div className="login">
            <>
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live={"assertive"}>{errMsg}</p>
                </section>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="login-container">
                            <div className="login-title">
                                <img src="./images/logo.png" alt="logo" className='logo'/>
                                <h1>Log in</h1>
                                <p>
                                    Don't have a an account yet?{" "}
                                    <Link to={"/register"}>Register</Link>
                                </p>
                            </div>
                            <div className="login__form-inputs">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="form-control w-100"
                                    ref={userRef}
                                    name="email"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    value={value.email}
                                    required
                                />
                                <input
                                    type={showPwd ? "text" : "password"}
                                    placeholder="Email"
                                    className="form-control w-100 my-3"
                                    name="password"
                                    onChange={handleChange}
                                    value={value.password}
                                    required
                                />
                                <div className="eye">
                                    {showPwd ? (
                                        <i className="fa-solid fa-eye" onClick={hidePwd}></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash" onClick={showPwdFunc}></i>
                                    )}
                                </div>
                                <div className="button-submit">
                                    <button className="btn btn-success">Log In</button>
                                </div>
                            </div>
                            <div className="create-acc-forgot-pass">
                                <span><Link to='/register'>Create new account</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        </div>
    );
};

export default Login;
