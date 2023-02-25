import React from 'react'
import { Outlet } from 'react-router-dom'

function TodoLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default TodoLayout