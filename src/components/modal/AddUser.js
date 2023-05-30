import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

const AddUser = (props) => {

    const URL = 'http://localhost:8081/addAgent';

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keyword, setKeyword] = useState('')
    // const [show, setShow] = useState(props.show)

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        await axios.post(URL, {
            id: props.userid,
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
            props.toggle();
            console.log(data);
            // setAddUsers([...addUsers, data])

        }).catch((e) => {
            console.log(e)
        });
    }
    
    return (
        <>
        <Modal show={props.show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <Form onSubmit={(e) => {
                e.preventDefault();
                setUsername(' ')
                setPassword(' ')
                setKeyword(' ')
                props.handleSubmit(username, password, keyword, props.userid)
            }}> */}
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
        <Button variant="primary" onClick={handleSubmit}>
            Add User
        </Button>
        </Modal.Footer>
        </Modal>
        </>
      );
}

export default AddUser