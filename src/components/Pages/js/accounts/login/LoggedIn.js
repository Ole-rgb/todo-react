import React from 'react'
import { Link } from 'react-router-dom'

function LogginIn() {
  return (
      <section>
          <h1>You are logged in</h1>
          <br />
          <Link to="/">Go To Home </Link>
      </section>  )
}

export default LogginIn