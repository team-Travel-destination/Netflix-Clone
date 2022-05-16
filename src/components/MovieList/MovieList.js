
import Movie from '../Movie/Movie'

export default function MovieList(props) {
    return (
        <>
            {
                props.recipe.map((data) => {
                    return (
                        <>
                            <Movie data={data} />
                        </>
                    )
                })}
        </>

    )
}
