import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
import { useState } from 'react';
import '../css/modalHeader.css';

const AddUser = (props) => {

    var getRole = sessionStorage.getItem("role");
    var user = sessionStorage.getItem("usernames");
    var name = user.replace(/['"]+/g, '');

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keyword, setKeyword] = useState('')
    
    return (
        <>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type='button' className='btn btn-outline-primary btn-lg' onClick={props.toggle}>Add User</button>
        </div>

        {getRole === 'root' && name === 'admin' ? 
        <Modal show={props.show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Agent</Modal.Title>
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
        <Button variant="secondary" onClick={props.toggle}>
            Close
        </Button>
        <Button variant="primary" onClick={(event) => props.handleSubmit(username, password, keyword, props.userid, event)}>
            Add User
        </Button>
        </Modal.Footer>
        </Modal> 
        :
        <Modal show={props.show} onHide={props.toggle} centered>
            <Modal.Header closeButton>
            <Modal.Title>Not Accessible</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>Only Admins are able to add new agents</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.toggle}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        }
        </>
      );
}

export default AddUser