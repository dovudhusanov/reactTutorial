import {useContext, useEffect, useRef, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthProvider";

import axios from "../../api/Auth";

const LOGIN_URL = "/api/auth/login";

const Login = () => {

    const {setAuth} = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()

    const [value, setValue] = useState({
        email: "",
        pwd: ""
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

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setErrMsg('')
    // }, [userValue.lgn, userValue.pwd])

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(value)
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({email: value.email, pwd: value.pwd}))
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({email: value.email, pwd: value.pwd, roles, accessToken})
            setValue({
                email: "",
                pwd: ""
            })
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err?.response.status === 400) {
                setErrMsg('Missing Email or Password')
            } else if (err?.response.status === 401) {
                setErrMsg("Unauthorized")
            } else {
                setErrMsg("Login Failed")
            }
            errRef.current.focus()
        }
    }
    //
    // const config = {
    //     languages: ["apple"],
    //     set (lang) {
    //         return this.languages.push(lang)
    //     }
    // }
    //
    // console.log(config.languages, config.set("banana"))

    return (
        <div className="login">
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p><a href="/">Go to Home</a></p>
                </section>
            ) : (
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
                                        name="pwd"
                                        onChange={handleChange}
                                        value={value.pwd}
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
            )}
        </div>
    );
};

export default Login;
