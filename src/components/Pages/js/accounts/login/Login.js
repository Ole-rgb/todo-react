import React, { useState, useRef, useEffect, useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

import AuthContext from "../../../../context/AuthProvider";
import axios from "../../../../../api/axios";
import LoginUserNameField from "../../../../FormTextFields/LoginUserNameField"
import LoginPasswordField from "../../../../FormTextFields/LoginPasswordField"
import LoggedIn from "./LoggedIn";

const LOGIN_URL = "/auth"

const Login = () => {
    //gets the value for the setAuth from the "gobal" AuthProvider
    const { auth, setAuth } = useContext(AuthContext);

    //sets focus on the username field after first render
    const userRef = useRef();

    //sets the focus on the error (for the screenreader)
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    //focuses the username field in the beginning
    useEffect(() => {
        if (!auth.accessToken) {
            userRef.current.focus()
        }
    }, [])

    //if the user changes the username or password, remove the error message
    useEffect(() => {
        setErrMsg("")
    }, [username, password])


    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default behaviour of the form (that would reload the page)

        axios.post(LOGIN_URL, {
            "username": username,
            "user_password": password
        }).then((response) => {
            // roles?
            const accessToken = response.data.accessToken
            setAuth({ username, password, accessToken })
        })
            .catch((err) => {
                setErrMsg(err.response.data.detail);
            })
        errRef.current.focus()
        setPassword("");
        setUsername("");
    }
    //TODO figure out what to use instead of "auth.accessToken" to determine that im logged in 
    return (
        <>
            {auth.accessToken ? (
                <LoggedIn/>
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
                                password={password} setPassword={(e) => setPassword(e)}
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