import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/modalHeader.css';

const NonAccessibleDelete = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <>
            <td>
                <button className='btn btn-danger btn-sm' onClick={handleShow}>Delete</button>
            </td>
        </>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        <Modal.Title>Not Accessible</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center'}}>Only Admins are able to delete agents</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>
</>
  )
}

export default NonAccessibleDelete