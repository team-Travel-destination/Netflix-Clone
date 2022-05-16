
import Movie from '../Movie/Movie'
import './MovieList.css'

export default function MovieList({ recipe }) {
    return (
        <div className='list'>
            {
                recipe.map((data) => {
                    return (
                        <>
                            <Movie data={data} />
                        </>
                    )
                })}
        </div>

    )
}
