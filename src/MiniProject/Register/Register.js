import {useContext, useEffect, useRef, useState} from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*{!@#$%]).{8,24}$/;

const Register = () => {

    const userRef = useRef()
    const errRef = useRef()


    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        validEmail: false,
        emailFocus: false,

        pwd: "",
        validPwd: false,
        pwdFocus: false,

        conPwd: "",
        validConPwd: false,
        conPwdFocus: false
    })

    const [alertMsg, setAlertMsg] = useState({
        errMsg: '',
        success: false
    })

    const [showPwd, setShowPwd] = useState({
        pwd: false,
        conPwd: false
    })

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(userInfo.userName)
        console.log(result)
        console.log(userInfo.userName)
        userInfo.validName = result
    }, [userInfo.userName])

    const showPwdFunc = (pass) => {
        pass === 'first'
            ? setShowPwd({
                ...showPwd,
                pwd: true,
            })
            : setShowPwd({
                ...showPwd,
                conPwd: true,
            })
    }

    const hidePwd = () => {
        setShowPwd({...showPwd.pwd, pwd: false})
    }

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userInfo)
        setUserInfo({
            userName: "",
            email: "",
            pwd: "",
            conPwd: ""
        })
    }

    return (
        <div className="login">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="login-container">
                        <div className="login-title">
                            <img src="./images/logo.png" alt="logo" className='logo'/>
                            <h1>Register</h1>
                        </div>
                        <div className="login__form-inputs">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="form-control w-100"
                                name="userName"
                                onChange={handleChange}
                                value={userInfo.userName}
                                ref={userRef}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control w-100 my-3"
                                name="email"
                                onChange={handleChange}
                                value={userInfo.email}
                                required
                            />
                            <input
                                type={showPwd.pwd ? "text" : "password"}
                                placeholder="Password"
                                className="form-control w-100 my-3"
                                name="pwd"
                                onChange={handleChange}
                                value={userInfo.pwd}
                                required
                            />
                            <div className="eyes">
                                {showPwd.pwd ? (
                                    <i className="fa-solid fa-eye" onClick={hidePwd}></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash" onClick={() => showPwdFunc('first')}></i>
                                )}
                            </div>
                            <input
                                type={showPwd.conPwd ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="form-control w-100 my-3"
                                name="conPwd"
                                onChange={handleChange}
                                value={userInfo.conPwd}
                                required
                            />
                            <div className="eyesConfirm">
                                {showPwd.conPwd ? (
                                    <i className="fa-solid fa-eye" onClick={hidePwd}></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash" onClick={showPwdFunc}></i>
                                )}
                            </div>
                            <div className="button-submit">
                                <button className="btn btn-success">Sign In</button>
                            </div>
                        </div>
                        <div className="create-acc-forgot-pass">
                            <span><Link to='/log_in'>Have an account <b>Log In</b></Link></span>
                            <span>Forgot password</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
