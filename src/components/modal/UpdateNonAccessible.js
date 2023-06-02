import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/modalHeader.css';

const UpdateNonAccessible = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <>
        <td>
            <button className='btn btn-warning btn-sm' onClick={handleShow}>Update</button>
        </td>
            </>
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
        </>
      )
}

export default UpdateNonAccessible