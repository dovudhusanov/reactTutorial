import {useContext, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";

export const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    return (
        <div className="login">
            <div className="login-form">
                <form>
                    <div className="login-container">
                        <div className="login-title">
                            <img src="./images/logo.png" alt="logo" className='logo'/>
                            <h1>Log in</h1>
                            <p>
                                Don't have a an account yet?{" "}
                                <Link to={"/"}>Register</Link>
                            </p>
                        </div>
                        <div className="login__form-inputs">
                            <input type="text" placeholder="First Name" className="form-control w-100"/>
                            <input type="email" placeholder="Email" className="form-control w-100 my-3"/>
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
        </div>
    );
};

export default Login;
