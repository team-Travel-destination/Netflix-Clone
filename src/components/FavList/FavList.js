import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
import './FavList.css'

export default function FavList() {
    const [favorite, setFavorite] = useState();

    async function getFav() {
        let url = `${process.env.REACT_APP_SERVER}/getMovies`;

        let response = await fetch(url, {
            method: 'GET'
        });

        let reciveData = await response.json();
        setFavorite(reciveData)


        // axios.get(url).then((data) => {
        //     setFavorite(data.data);
        //     console.log("data", data.data);
        //     console.log("fav", favorite);
        //     console.log("favData", favorite.data);
        // }).catch((error) => {
        //     console.log("Error in fav movie", error)
        // })
    }
    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER}/DELETE?id=${id}`
        let response = await fetch(url, {
            method: 'DELETE'
        });
        // let delData = await response.json();

        if (response.id === id) {
            alert("deleted")
        }
    }
    useEffect(() => {
        getFav();
    }, [])

    return (
        <div className='list container m-3 '>
            {
                favorite && favorite.map((favorite) => {
                    return (
                        <Card style={{ width: '18rem' }} className='bg-dark text-white m-3'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{favorite.title}</Card.Title>
                                <Card.Text>{favorite.summary}</Card.Text>
                                <Button variant="primary" onClick={() => handleDelete(favorite.id)}>Delete</Button>
                            </Card.Body>

                        </Card>
                    )
                })
            }
        </div>
    )
}
