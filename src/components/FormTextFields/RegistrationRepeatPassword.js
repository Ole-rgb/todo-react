import React from 'react'

function RegistrationRepeatPassword(props) {
    return (

        <div className="form-outline form-white mb-4">
            <input
                className="form-control form-control-lg"
                type="password"
                id="typeRepeatPasswordX"
                onChange={(e) => props.setMatchPassword(e.target.value)}
                placeholder="Confirm Password"
                value={props.matchPassword}
                required
                aria-invalid={props.validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => props.setMatchFocus(true)}
                onBlur={() => props.setMatchFocus(false)}
            />
            {
                props.matchFocus && !props.validMatch &&
                <p id="confirmnote" className="instructions">
                    Must match the first password input field.
                </p>
            }
        </div>)
}

export default RegistrationRepeatPassword