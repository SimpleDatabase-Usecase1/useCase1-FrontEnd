import React from 'react'
import { Form } from 'react-bootstrap'
import './css/login.css'


function Login() {
  return (
    <Form>
      <div className='form-group'>
        <label for="usernameInput">Username</label>
        <input type="text" class="form-control" id="usernameInput" placeholder="Username"></input>
      </div>
      <div className='form-group'>
        <label for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput" placeholder="Password"></input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </Form>

  )
}

export default Login