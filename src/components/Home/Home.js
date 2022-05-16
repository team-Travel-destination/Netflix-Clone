
import { useState, useEffect } from "react";
// import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";

export default function Home() {
    const [recipe, setRecipe] = useState([]);

    async function getTrending() {
        let url = process.env.REACT_APP_SERVER
        let res = await fetch(`${url}/trending`)
        let data = await res.json();
        setRecipe(data);

    }
    useEffect(() => {
        getTrending();
    }, [])

    return (
        <div className="container mt-5">

            {(recipe.length > 0) && < MovieList recipe={recipe} />}


        </div>
    )
}