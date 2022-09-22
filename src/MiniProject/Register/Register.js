import {useContext, useEffect} from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="login">
            <div className="login-form">
                <form>
                    <div className="login-container">
                        <div className="login-title">
                            <img src="./images/logo.png" alt="logo" className='logo'/>
                            <h1>Register</h1>
                        </div>
                        <div className="login__form-inputs">
                            <input type="text" placeholder="First Name" className="form-control w-100"/>
                            <input type="text" placeholder="Last Name" className="form-control w-100 my-3"/>
                            <input type="email" placeholder="Email" className="form-control w-100 my-3"/>
                            <input type="password" placeholder="Last Name" className="form-control w-100 my-3"/>
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
