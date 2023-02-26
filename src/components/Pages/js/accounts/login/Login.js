import React, { useState, useRef, useEffect, useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

import AuthContext from "../../../../context/AuthProvider";
import axios from "../../../../../api/axios";
const LOGIN_URL = "/accounts/"

const Login = () => {
    //gets the value for the setAuth from the "gobal" AuthProvider
    const {setAuth} = useContext(AuthContext); 
    
    //sets focus on the username field after first render
    const userRef = useRef();
    
    //sets the focus on the error (for the screenreader)
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    //this will be removed later and the app will redirect 
    const [success, setSuccess] = useState(false);

    //focuses the username field in the beginning
    useEffect( () =>{
        userRef.current.focus()
    }, [])

    //if the user changes the username or password, remove the error message
    useEffect( () => {
        setErrMsg("")
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent default behaviour of the form (that would reload the page)


        axios.post(LOGIN_URL, JSON.stringify({"username": username, "password": password}))
            .then( (response) => {
                // var accessToken =response.data.AuthToken
                // setAuth(accessToken);
                // roles?
                setSuccess(true); //will be removed later
             })
            .catch((err) => {
                setErrMsg(err.message);
            }
        )
        errRef.current.focus()
        setPassword(""); 
        setUsername("");      
    }

    // const isValidEmail = () =>{
    //     const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    //     return regEx.test(email)
    // }
    

    return(
        <>
        {success ? (
            <section>
                    <h1>You are logged in</h1>
                    <br/>
                    <Link to="/">Go To Home </Link>
            </section>
        ):(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>

                                    <h2 className="fw-bold mb-2 ">Sign In</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <form onSubmit={handleSubmit}>

                                        <div className="form-outline form-white mb-4">
                                            <input 
                                                className="form-control form-control-lg" 
                                                type="username" 
                                                id="typeUsernameX" 
                                                ref={userRef} 
                                                onChange={(e) => setUsername(e.target.value)} 
                                                placeholder="Username" 
                                                value={username}
                                                required
                                                />
                                        </div>
                                        
                                        <div className="form-outline form-white mb-4">
                                            <input 
                                                className="form-control form-control-lg" 
                                                type="password" 
                                                id="typePasswordX" 
                                                onChange={(e) => setPassword(e.target.value)} 
                                                placeholder="Password" 
                                                value={password}
                                                required
                                                />
                                        </div>                                    

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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>    
            )}
        </>
        )
}

export default Login