import { Modal, Button } from 'react-bootstrap'

export default function ModalMovie({ show, handleClose, data }) {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <img src={data.image} />
            <Modal.Body>{data.overview}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Fav
                </Button>
            </Modal.Footer>
        </Modal>
    )
}