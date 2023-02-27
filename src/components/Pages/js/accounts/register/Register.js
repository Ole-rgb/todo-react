import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RegisterUserNameButton from '../../../../FormTextFields/RegisterUserNameField';
import RegistrationPassword from '../../../../FormTextFields/RegistrationPassword';
import RegistrationRepeatPassword from '../../../../FormTextFields/RegistrationRepeatPassword';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/users/';

const Register = () => {
  
  const {auth, setAuth} = useAuth()
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    userRef.current.focus();
  }, [])

  //check if the username is valid
  useEffect(() => {
    const username_valid = USER_REGEX.test(username);
    setValidName(username_valid);

  }, [username])

  //check if the password is valid
  useEffect(() => {
    if(!auth.accessToken){
      const result = PWD_REGEX.test(password);
      setValidPassword(result);
      const match = (password === matchPassword);
      setValidMatch(match);
    }
  }, [password, matchPassword])

  //reset error msg, if the username. the pw or the matchpw changes
  useEffect(() => {
    setErrMsg("")
  }, [username, password, matchPassword])

  const handleSubmit = (e) => {
    e.preventDefault();
    // double check that the results are valid
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return
    }

    //call axios to validate the new database entry 
    axios.post(REGISTER_URL, {
        "username": username, 
        "user_password": password 
      }
      ).then((response)=> {
        const accessToken = response.data.accessToken
        setAuth({ username, password, accessToken })
        }
      ).catch((err) => {
        setErrMsg(err.response.data.detail)
      }
    )
  }

  return (
    <>
      {auth.accessToken ? (
        <section>
          <h1>Success!</h1>
          <Link to="/">You are logged in</Link>
        </section>
      ) :
        (<>
          <div className="mb-md-5 mt-md-4 pb-5">
            <p ref={errRef} className="errmsg" aria-live="assertive">{errMsg}</p>
            <h2 className="fw-bold mb-2 ">New To The App?</h2>
            <p className="text-white-50 mb-5">Please enter a username and password!</p>
            <form onSubmit={handleSubmit}>
              <RegisterUserNameButton
                userRef={userRef} validName={validName} userFocus={userFocus}
                username={username} setUserFocus={(e) => setUserFocus(e)} setUsername={(e) => setUsername(e)}
              />
              <RegistrationPassword
                validPassword={validPassword} passwordFocus={passwordFocus}
                setPassword={(e) => setPassword(e)} setPasswordFocus={(e) => setPasswordFocus(e)}
              />
              <RegistrationRepeatPassword
                validMatch={validMatch} matchFocus={matchFocus} matchPassword={matchPassword}
                setMatchFocus={(e) => setMatchFocus(e)} setMatchPassword={(e) => setMatchPassword(e)}
              />
              <button className="btn btn-outline-light btn-lg px-5" disabled={!validName || !validPassword || !validMatch ? true : false}>Click To Register</button>
            </form>
          </div>
          <div>
            <p className="mb-0">
              Already registered?
              <Link className="text-white-50 fw-bold" to="/accounts/login">Sign In</Link>
            </p>
          </div>
        </>
        )}
    </>
  )
}

export default Register