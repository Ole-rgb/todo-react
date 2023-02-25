import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import URL from "../../../../URL";
// import { Button } from "react-bootstrap"

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateEmail = (e) =>{
        setEmail(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const isValidEmail = () =>{
        const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        return regEx.test(email)
    }
    

    const SubmitLogin = () => {
        //TODO build API first!

        // if (isValidEmail()&& !props.loggedIn){
        //     //call api to login
        //     axios.post(URL + "/login", {
        //         "email": email,
        //         "password": password
        //     }).then((responce)=>{
        //          console.log(responce)
        //         //if it worked then reset all the fields
        //         document.getElementById("typePasswordX").value = ""
        //         document.getElementById("typeEmailX").value = ""
        //         setEmail("");
        //         setPassword("");
        //     })
        // .catch((error) => console.log(error))
        // }else{
        //     console.log("invalid, dont continue")
        // }

    }

    return(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" onChange={updateEmail} className="form-control form-control-lg" placeholder="Email" />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" onChange={updatePassword} className="form-control form-control-lg" placeholder="Password" />
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="accounts/password/reset">Forgot password?</a></p>

                                    <button className="btn btn-outline-light btn-lg px-5" onClick={SubmitLogin}>Login</button>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="/accounts/signup" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    )
}

export default Login