import React from 'react'

function RegisterUserNameButton(props) {
    return (
        <div className="form-outline form-white mb-4">
            <input
                className="form-control form-control-lg"
                type="text"
                id="typeUsernameX"
                ref={props.userRef}
                autoComplete='off'
                onChange={(e) => props.setUsername(e.target.value)}
                required
                aria-invalid={props.validName ? "false" : "true"}
                aria-describedby='uidnote'
                onFocus={() => props.setUserFocus(true)}
                onBlur={() => props.setUserFocus(false)}
                value={props.username}
                placeholder="Username"
            />
            {props.userFocus && props.username && !props.validName &&
                <p id="uidnote" className="instructions">
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>
            }
        </div>)
}

export default RegisterUserNameButton