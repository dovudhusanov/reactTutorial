import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";
import axios from "../../api/Auth"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PWD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{8,20}$/
const REGISTER_URL = '/api/auth/signup'

const Register = () => {

    const userRef = useRef(null)
    const errRef = useRef(null)


    const [userInfo, setUserInfo] = useState({
        userName: "",
        validUserName: false,
        userNameFocus: false,

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
        // const result = USER_REGEX.test(userInfo.userName)
        setUserInfo({...userInfo, validUserName: USER_REGEX.test(userInfo.userName)})
    }, [userInfo.userName])

    useEffect(() => {
        // const result = EMAIL_REGEX.test(userInfo.email)
        setUserInfo({...userInfo, validEmail: EMAIL_REGEX.test(userInfo.email)})
    }, [userInfo.email])

    useEffect(() => {
        // const result = PWD_REGEX.test(userInfo.pwd)
        setUserInfo({...userInfo, validPwd: PWD_REGEX.test(userInfo.pwd)})
        // console.log(PWD_REGEX.test(userInfo.pwd))
        // const conPwd = userInfo.pwd === userInfo.conPwd
        setUserInfo({...userInfo, validConPwd: userInfo.pwd === userInfo.conPwd})
        // console.log(userInfo.pwd === userInfo.conPwd)
    }, [userInfo.pwd, userInfo.conPwd])

    useEffect(() => {
        setAlertMsg({...alertMsg, errMsg: ""})
    }, [userInfo.userName, userInfo.email, userInfo.pwd, userInfo.conPwd])

    const showPwdFunc = useCallback((pass) => {
        pass === 'first'
            ? setShowPwd({
                ...showPwd,
                pwd: true,
            })
            : setShowPwd({
                ...showPwd,
                conPwd: true,
            })
    }, [showPwd.pwd, showPwd.conPwd])

    const hidePwd = useCallback(() => {
        setShowPwd({...showPwd.pwd, pwd: false})
    }, [showPwd.pwd, showPwd.conPwd])

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userInfo);
        const v1 = USER_REGEX.test(userInfo.userName)
        const v2 = EMAIL_REGEX.test(userInfo.email)
        const v3 = PWD_REGEX.test(userInfo.pwd)
        if (!v1 || !v2 || !v3) {
            setAlertMsg({...alertMsg, errMsg: "Invalid Entry"})
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({
                name: userInfo.userName,
                email: userInfo.email,
                password: userInfo.pwd
            }),
                {
                    headers: {"Content-Type": "application/json"}}
            )
            localStorage.setItem("user",JSON.stringify(response.data))
            console.log(response.data)
            console.log(response.accessToken)
            console.log(JSON.stringify(response))
            setAlertMsg({...alertMsg, success: true})
            setUserInfo({
                userName: "",
                email: "",
                pwd: "",
                conPwd: ""
            })
        } catch (error) {
            if (!error?.response) {
                setAlertMsg({errMsg: "No Server Response"})
            } else if (error.response?.status === 409){
                setAlertMsg({errMsg: "Username Taken"})
            } else {
                setAlertMsg({errMsg: "Registration Failed"})
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            <section>
                <p ref={errRef} className={alertMsg.errMsg ? "errmsg" : "offscreen"}
                   aria-live={"assertive"}>{alertMsg.errMsg}</p>
            </section>
            <div className="login">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="login-container">
                            {alertMsg.success ? (
                                <section>
                                    <h1 className="text-success text-center">Success!</h1>
                                    <Link to="/log_in" className="text-center">
                                        <button className="btn btn-success text-center ">Log In</button>
                                    </Link>
                                </section>
                            ) : (
                                <>
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
                                            autoComplete={"off"}
                                            aria-invalid={userInfo.validUserName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => userInfo.userNameFocus = true}
                                            onBlur={() => userInfo.userNameFocus = false}
                                        />
                                        <p id="uidnote"
                                           className={userInfo.userNameFocus && userInfo.userName && !userInfo.validUserName ? "instructions" : "offscreen"}>
                                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                                            4 to 24 characters.
                                        </p>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="form-control w-100 my-3"
                                            name="email"
                                            onChange={handleChange}
                                            value={userInfo.email}
                                            required
                                            autoComplete={"off"}
                                            aria-invalid={userInfo.validEmail ? "false" : "true"}
                                            aria-describedby="emailnote"
                                            onFocus={() => userInfo.emailFocus = true}
                                            onBlur={() => userInfo.emailFocus = false}
                                        />
                                        <p id="emailnote"
                                           className={userInfo.emailFocus && userInfo.email && !userInfo.validEmail ? "instructions" : "offscreen"}>
                                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                                            Include an "@"
                                        </p>
                                        <input
                                            type={showPwd.pwd ? "text" : "password"}
                                            placeholder="Password"
                                            className="form-control w-100 my-3"
                                            name="pwd"
                                            onChange={handleChange}
                                            value={userInfo.pwd}
                                            required
                                            autoComplete={"off"}
                                            aria-invalid={userInfo.pwd ? "false" : "true"}
                                            aria-describedby="passnote"
                                            onFocus={() => userInfo.pwdFocus = true}
                                            onBlur={() => userInfo.pwdFocus = false}
                                        />
                                        <p id="passnote"
                                           className={userInfo.pwdFocus && userInfo.pwd && !userInfo.validPwd ? "instructions" : "offscreen"}>
                                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                                            minimum 8 letter and one letter a Big with numbers
                                        </p>
                                        <div className="eyes">
                                            {showPwd.pwd ? (
                                                <i className="fa-solid fa-eye" onClick={hidePwd}></i>
                                            ) : (
                                                <i className="fa-solid fa-eye-slash"
                                                   onClick={() => showPwdFunc('first')}></i>
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
                                            aria-invalid={userInfo.conPwd ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => userInfo.conPwdFocus = true}
                                            onBlur={() => userInfo.conPwdFocus = false}
                                        />
                                        <div className="eyesConfirm">
                                            {showPwd.conPwd ? (
                                                <i className="fa-solid fa-eye" onClick={hidePwd}></i>
                                            ) : (
                                                <i className="fa-solid fa-eye-slash" onClick={showPwdFunc}></i>
                                            )}
                                        </div>
                                        <p id="confirmnote"
                                           className={userInfo.conPwdFocus && !userInfo.validPwd ? "instructions" : "offscreen"}>
                                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                                            Most match the first password input filed
                                        </p>

                                        <div className="button-submit">
                                            <button className="btn btn-success"
                                                    disabled={userInfo.userName && userInfo.email && userInfo.pwd && userInfo.conPwd ? false : true}>Sign
                                                Up
                                            </button>
                                        </div>

                                    </div>
                                    <div className="create-acc-forgot-pass">
                                        <span><Link to='/log_in'>Have an account <b>Log In</b></Link></span>
                                        <span>Forgot password</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
