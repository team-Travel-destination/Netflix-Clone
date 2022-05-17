
import { useState, useEffect } from "react";
// import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";
import axios from 'axios'

export default function Home() {
    const [recipe, setRecipe] = useState([]);

    async function getTrending() {
        let url = process.env.REACT_APP_SERVER
        // let res = await fetch(`${url}/trending`)
        // let data = await res.json();
        // setRecipe(data);
        axios.get(`${url}/trending`).then((data) => {
            setRecipe(data.data);
            // console.log(data.data)
        }).catch((error) => {
            console.log("Error in trending", error)
        })

    }

    function updateData(newKey, id) {
        let updateData = recipe.map((recipe) => {
            if (recipe.id === id) {
                recipe.comment = newKey.comment;
                return recipe
            }
        })
        getTrending(updateData);
    }

    useEffect(() => {
        getTrending();
    }, [])

    return (
        <div className="container mt-5">

            {(recipe.length > 0) && < MovieList recipe={recipe} updateData={updateData} />}


        </div>
    )
}