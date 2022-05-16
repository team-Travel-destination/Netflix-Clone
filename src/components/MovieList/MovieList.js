
import Movie from '../Movie/Movie'
import './MovieList.css'

export default function MovieList(props) {
    return (
        <div className='list'>
            {
                props.recipe.map((data) => {
                    return (
                        <>
                            <Movie data={data} />
                        </>
                    )
                })}
        </div>

    )
}
