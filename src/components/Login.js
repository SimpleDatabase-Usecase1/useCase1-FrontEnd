import { React, useState } from 'react'
import { Form } from 'react-bootstrap'
import './css/login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login () {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const URL = 'http://52.23.195.111:8080/login';

  const handleSubmit = async() => {

    await axios.post(URL, {
      username: username,
      password: password
    }).then((response) => {
      console.log("it reached here in the .then")
      if(response?.data?.message === 'Login Successful' && response?.data?.status === true && response?.status === 200){
        console.log("SUCCESS");
        sessionStorage.setItem("auth", response?.data?.status);
        sessionStorage.setItem("usernames", JSON.stringify(response?.data?.username));
        sessionStorage.setItem("role", response?.data?.keyword);
        setUsername(' ');
        setPassword(' ');
        navigate('/home');
      }
      else{
        console.log("DID NOT WORK`");
        console.log(JSON.parse(sessionStorage.getItem("auth")))
        alert('Incorrect Username or Password')
      }
    })
  }

  return (
    <div className='container'>
      <Form>
      <div className='form-group'>
      <h3 className="login-title">Sign In</h3>
        <label htmlFor="usernameInput">Username</label>
        <input type="username" className="form-control" id="usernameInput" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>  
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
      </Form>
    </div>

  )
}

export default Login