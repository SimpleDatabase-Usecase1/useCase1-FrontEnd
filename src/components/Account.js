import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function Account() {

  var getRole = sessionStorage.getItem("role");
  const URL = 'http://localhost:8081/getAllAgents';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async() => {
      const { data } = await axios.get(URL);
      setUsers(data);
    };
    fetchUserInfo();
  }, []);

  return (
    <div>
      <NavBar/>
      <br/>
      <div className='account'>
        <div className='container'>
          
          {/* Only root users (admin/manager) can see the table*/}
          {getRole === 'root' ? 
          <table className='table'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Keyword</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                <td> {user.username} </td>
                <td> {user.password} </td>
                <td> {user.keyword} </td>
                <td> <button className='btn btn-warning'>Update</button> </td>
                <td> <button className='btn btn-danger'>Delete</button> </td>
              </tr>
              ))}
            </tbody>
            <br/>
            <div className="d-grid gap-2 col-50 mx-auto">
              <button type='button' className='btn btn-outline-primary btn-lg'>Add User</button>
            </div>
          </table> :
          <div>
            <h2> This is the Account Modification page</h2>
            <p>This page can only be modified by the manager/admin</p>
          </div>
          }
          </div>
      </div>
    </div>

  )
}

export default Account