import React, {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDelete = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = 'http://52.23.195.111:8080/deleteAgent/' + props.userid;

    const handleDelete = async() => {
        await axios.delete(url).then((res) => {
            if(res?.status !== 200){
                throw new Error('something went wrong');
            }
            handleClose();
            window.location.reload();
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <>
        <>
        <td>
            <button className='btn btn-danger btn-sm' onClick={handleShow}>Delete</button>
        </td>
        </>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Delete Agent</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>Are you sure you want to delete this agent?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ConfirmDelete
