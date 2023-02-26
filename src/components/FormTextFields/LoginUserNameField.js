import React from 'react'

function LoginUserNameField(props) {
  return (
      <div className="form-outline form-white mb-4">
          <input
              className="form-control form-control-lg"
              type="text"
              id="typeUsernameX"
              ref={props.userRef}
              onChange={(e) => props.setUsername(e.target.value)}
              placeholder="Username"
              value={props.username}
              required
          />
      </div>  )
}

export default LoginUserNameField