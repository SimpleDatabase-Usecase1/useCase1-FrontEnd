import axios from 'axios';
import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../css/modalHeader.css';

const UpdateUser = (props) => {

    var getRole = sessionStorage.getItem("role");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [username, setUsername] = useState(props.username);
    const [password, setPassword] = useState(props.userpass);
    const [keyword, setKeyword] = useState(props.userkey);

    const url = 'http://52.23.195.111:8080/updateAgent/' + props.userid;

    const handleUpdate = async(e) => {
        e.preventDefault()
        await axios.put(url, {
            id: props.userid,
            username: props.username,
            password: password,
            keyword: keyword
        }).then((res) => {
            if(res?.status !== 200) {
                throw new Error('Something went wrong when updating');
            }
            handleClose();
            window.location.reload();
        }).catch((e) => {
            console.log(e)
        });
    }

  return (
    <>
    <>
    <td>
        <button className='btn btn-warning btn-sm' onClick={handleShow}>Update</button>
    </td>
    </>

    {getRole === 'root' ?
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        <Modal.Title>Update Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-2" controlId="usernameInput">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="customer1"
                    value={props.username}
                    disabled={true}
                />
                </Form.Group>
                <Form.Group className="mb-2" controlId="idInput">
                <Form.Label>Id</Form.Label>
                <Form.Control
                    type="text"
                    value={props.userid}
                    disabled={true}
                />
                </Form.Group>
                <Form.Group className="mb-2" controlId="passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="123"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);}}
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-2" controlId="keywordInput">
                <Form.Label>Keyword</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="associate"
                    value={keyword}
                    onChange={(e) => {setKeyword(e.target.value);}}
                />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
            Confirm
        </Button>
        </Modal.Footer>
    </Modal> :

    <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Not Accessible</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign: 'center'}}>Only Admins and Managers are able to grant access</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
    </Modal>

    }
    
    </>
  )
}

export default UpdateUser