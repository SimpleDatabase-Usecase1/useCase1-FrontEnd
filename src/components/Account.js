import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddUser from './modal/AddUser';
import ConfirmDelete from './modal/ConfirmDelete';
import NonAccessible from './modal/NonAccessible';
import NonAccessibleDelete from './modal/NonAccessibleDelete';
import UpdateNonAccessible from './modal/UpdateNonAccessible';
import UpdateUser from './modal/UpdateUser';
import NavBar from './NavBar'

function Account() {

  var getRole = sessionStorage.getItem("role");
  var user = sessionStorage.getItem("usernames");
  var name = user.replace(/['"]+/g, '');

  //URL for the post and get request
  const URL = 'http://52.23.195.111:8080/getAllAgents';
  const URL2 = 'http://52.23.195.111:8080/addAgent';


  const [users, setUsers] = useState([]);

  //get request to display the user data
  useEffect(() => {
    const fetchUserInfo = async() => {
      const { data } = await axios.get(URL);
      setUsers(data);
    };
    fetchUserInfo();
  }, []);

  //grab the largest id 
  const getUserId = () => {
    var largestId = 0
    users.forEach(user => {
      largestId = Math.max(largestId, user.id)
    })
    return largestId + 1
  }

  //handle submit for adding a user
  const handleSubmit = async(username, password, keyword, id, e) => {
    e.preventDefault();
    
    await axios.post(URL2, {
        id: id,
        username: username,
        password: password,
        keyword: keyword
    }).then((response) => {
        // console.log(response);
        if(response?.status !== 200){
            throw new Error('Something went wrong');
        }
        return response?.data
    }).then((data) => {
        toggleShow();
        console.log(data);
        setUsers([...users, data]);

    }).catch((e) => {
        console.log(e)
    });
  }

  //modal to show add users
  const [modalAddShow, setModalAddShow] = useState(false);

  const toggleShow = () => {
    setModalAddShow(!modalAddShow);
  }

  return (
    <div>
      <NavBar/>
      <br/>
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
                {getRole === 'root' ? 
                <UpdateUser userid={user.id} username={user.username} userpass={user.password} userkey={user.keyword}/> :
                <UpdateNonAccessible toggle={toggleShow} show={modalAddShow}/>
                }
                {getRole === 'root' && name === 'admin' ? <ConfirmDelete userid={user.id}/> : <NonAccessibleDelete toggle={toggleShow} show={modalAddShow}/>}
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Only admins are able to add new users */}
        
        {getRole === 'root' && name === 'admin' ? 
        <AddUser show={modalAddShow} toggle={toggleShow} userid={getUserId()} users={users} handleSubmit={handleSubmit}/> :
        <NonAccessible toggle={toggleShow} show={modalAddShow}/>
        }
      </div>
    </div>

  )
}

export default Account