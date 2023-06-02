import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/modalHeader.css';

const NonAccessible = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type='button' className='btn btn-outline-primary btn-lg' onClick={handleShow}>Add User</button>
        </div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Not Accessible</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>Only Admins are able to add new agents</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default NonAccessible