import { React, useState } from 'react'
import { Form } from 'react-bootstrap'
import './css/login.css'
// import axiosInstance from '../service/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login () {
 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const URL = 'http://localhost:8081/login';

  const handleSubmit = async() => {

    await axios.post(URL, {
      username: username,
      password: password
    }).then((response) => {
      console.log("it reached here in the .then")
      if(response?.data?.message === 'Login Successful' && response?.data?.status === true){
        console.log("SUCCESS");
        navigate('/home');
      }
      else{
        console.log("DID NOT WORK`");
        alert('Incorrect Username or Password')
      }
    })
  }

  return (
    <Form>
      <div className='form-group'>
        <label htmlFor="usernameInput">Username</label>
        <input type="username" className="form-control" id="usernameInput" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

         
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      
    </Form>

  )
}

export default Login