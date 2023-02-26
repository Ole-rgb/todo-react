import React, { useState, useRef, useEffect, useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

import AuthContext from "../../../../context/AuthProvider";
import axios from "../../../../../api/axios";
import LoginUserNameField from "../../../../FormTextFields/LoginUserNameField";
import LoginPasswordField from "../../../../FormTextFields/LoginPasswordField";
const LOGIN_URL = "/auth"

const Login = () => {
    //gets the value for the setAuth from the "gobal" AuthProvider
    const { setAuth } = useContext(AuthContext);
    //this will be removed later (if auth, then dont show this!) 
    const [success, setSuccess] = useState(false);

    //sets focus on the username field after first render
    const userRef = useRef();

    //sets the focus on the error (for the screenreader)
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    //focuses the username field in the beginning
    useEffect(() => {
        userRef.current.focus()
    }, [])

    //if the user changes the username or password, remove the error message
    useEffect(() => {
        setErrMsg("")
    }, [username, password])


    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default behaviour of the form (that would reload the page)

        axios.post(LOGIN_URL, {
            "username":username,
            "user_password": password 
        }).then((response) => {
                // var accessToken =response.data.AuthToken
                // setAuth(accessToken);
                // roles?
                setSuccess(true)
            })
            .catch((err) => {
                setErrMsg(err.message);
            }
            )
        errRef.current.focus()
        setPassword("");
        setUsername("");
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in</h1>
                    <br />
                    <Link to="/">Go To Home </Link>
                </section>
            ) : (
                <>
                    <div className="mb-md-5 mt-md-4 pb-5">
                        <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>
                        <h2 className="fw-bold mb-2 ">Sign In</h2>
                        <p className="text-white-50 mb-5">Please enter your username and password!</p>
                        <form onSubmit={handleSubmit}>
                            <LoginUserNameField
                                userRef={userRef} username={username} setUsername={(e) => setUsername(e)}
                            />
                            <LoginPasswordField
                                password={password} setPassword={(e)=> setPassword(e)}
                            />
                            <p className="small mb-5 pb-lg-2">
                                <Link className="text-white-50" to="/accounts/password/reset">Forgot password?</Link>
                            </p>
                            <button className="btn btn-outline-light btn-lg px-5">Login</button>
                        </form>
                    </div>
                    <div>
                        <p className="mb-0">
                            Don't have an account?
                            <Link className="text-white-50 fw-bold" to="/accounts/register">Sign Up</Link>
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

export default Login