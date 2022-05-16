import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

export default function Movie({ data, updateData }) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({})


    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setMovie(data)
        setShow(true)
    };
    return (
        <div className=' m-3 flex-row '>
            <Card style={{ width: '18rem' }} className='bg-dark text-white'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.overview}</Card.Text>
                    <Button variant="primary" onClick={() => { handleShow(data) }}>Show</Button>
                </Card.Body>

            </Card>
            {
                movie && <ModalMovie show={show} handleClose={handleClose} data={movie} />
            }

        </div>
    )
}
