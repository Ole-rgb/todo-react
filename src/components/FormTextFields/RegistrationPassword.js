import React from 'react'

function RegistrationPassword(props) {
  return (
    <>
      <div className="form-outline form-white mb-4">
        <input
          className="form-control form-control-lg"
          type="password"
          id="typePasswordX"
          onChange={(e) => props.setPassword(e.target.value)}
          placeholder="Password"
          value={props.password}
          required
          aria-invalid={props.validPassword ? "false" : "true"}
          aria-describedby='pwdnote'
          onFocus={() => props.setPasswordFocus(true)}
          onBlur={() => props.setPasswordFocus(false)}
        />
      </div>
      {props.passwordFocus && !props.validPassword &&
        <p id="pwdnote" className='instruction'>
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>
      }
    </>
  )
}

export default RegistrationPassword