import React from 'react'

function LoginPasswordField(props) {
  return (
      <div className="form-outline form-white mb-4">
          <input
              className="form-control form-control-lg"
              type="password"
              id="typePasswordX"
              onChange={(e) => props.setPassword(e.target.value)}
              placeholder="Password"
              value={props.password}
              required
          />
      </div>  )
}

export default LoginPasswordField