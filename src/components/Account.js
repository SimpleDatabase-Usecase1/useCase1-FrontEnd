import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddUser from './modal/AddUser';
import NavBar from './NavBar'

function Account() {

  var getRole = sessionStorage.getItem("role");
  const URL = 'http://localhost:8081/getAllAgents';

  //modal to show add users
  const [modalAddShow, setModalAddShow] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async() => {
      const { data } = await axios.get(URL);
      setUsers(data);
    };
    fetchUserInfo();
  }, []);

  const getUserId = () => {
    var largestId = 0
    users.forEach(user => {
      largestId = Math.max(largestId, user.id)
    })
    return largestId + 1
  }

  const toggleShow = () => {
    setModalAddShow(!modalAddShow);
  }

  return (
    <div>
      <NavBar/>
      <br/>
      {/* Only root users (admin/manager) can see the table*/}
      {getRole === 'root' ? 
      <div className='account'>
        <div className='container'>
        
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
          </table>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type='button' className='btn btn-outline-primary btn-lg' onClick={toggleShow}>Add User</button>
          {/* <AddUser show={modalAddShow} onHide={() => setModalAddShow(false)} userid={getUserId()} users={users}/> */}
          <AddUser show={modalAddShow} toggle={toggleShow} userid={getUserId()} users={users}/>
        </div>
      </div> :
          <div>
            <h2> This is the Account Modification page</h2>
            <p>This page can only be modified by the manager/admin</p>
          </div>
          }
    </div>

  )
}

export default Account