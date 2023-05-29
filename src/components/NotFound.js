import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Click below to navigate back to the Home Page</p>
        <Link to={'/home'}>Home Page</Link>
    </div>
  )
}

export default NotFound