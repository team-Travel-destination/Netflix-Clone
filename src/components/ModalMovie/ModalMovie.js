import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react'

import axios from 'axios'
export default function ModalMovie({ show, handleClose, data }) {

    let comment = useRef();

    function handleComment(event) {
        event.preventDefault();
        let newComment = comment.current.value;
    }


    async function handleAdd(event, data) {
        event.preventDefault();

        let url = `${process.env.REACT_APP_SERVER}/addMovie`;
        let favData = {
            id: data.id,
            title: data.title,
            release_date: data.release_date,
            poster_path: data.poster_path,
            overview: data.overview
        }
        console.log({ favData });
        // let response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(favData)
        // })
        axios.post(url, favData).then((res) => {
            console.log("success");
        }).catch(console.log("Error in fetch data"))

        // let addMovie = await response.json();
        // console.log(addMovie);

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
            <Modal.Body>{data.overview}</Modal.Body>
            {data.comment ? data.comment : "No Comment"}
            <Form className="container" >
                <Form.Group className=" mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control ref={comment} type="text" placeholder="Enter your comment" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
                    Add Comment
                </Button>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={(event) => handleAdd(event, data)}>
                    Add Fav
                </Button>
            </Modal.Footer>
        </Modal>
    )
}