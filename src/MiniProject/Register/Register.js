import {useContext, useEffect, useRef, useState} from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*{!@#$%]).{8,24}$/;

const Register = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, serUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false)

    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPwd, setShowPwd] = useState({
        pwd: false,
        conPwd: false
    })

    const showPwdFunc = (pass) => {
        pass === 'first'
            ? setShowPwd({
                ...showPwd,
                pwd: true
            })
            : setShowPwd({
                ...showPwd,
                conPwd: true
            })
    }

    const hidePwd = () => {
        setShowPwd({...showPwd.pwd, pwd: false})
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(value)
        setValue({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
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
                                name="name"
                                onChange={handleChange}
                                value={value.name}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control w-100 my-3"
                                name="email"
                                onChange={handleChange}
                                value={value.email}
                                required
                            />
                            <input
                                type={showPwd.pwd ? "text" : "password"}
                                placeholder="Password"
                                className="form-control w-100 my-3"
                                name="password"
                                onChange={handleChange}
                                value={value.password}
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
                                name="confirmPassword"
                                onChange={handleChange}
                                value={value.confirmPassword}
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
