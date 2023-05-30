import axios from 'axios';
import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const UpdateUser = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState(props.username);
    const [password, setPassword] = useState(props.userpass);
    const [keyword, setKeyword] = useState(props.userkey);

    const url = 'http://localhost:8081/updateAgent/' + props.userid;

    const handleUpdate = async(e) => {
        e.preventDefault()
        await axios.put(url, {
            id: props.userid,
            username: username,
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
        <button className='btn btn-warning' onClick={handleShow}>Update</button>
    </td>
    </>

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
                    value={username}
                    onChange={(e) => {setUsername(e.target.value);}}
                    autoFocus
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
    </Modal>
    </>
  )
}

export default UpdateUser