const Movies = ({ movies })=>{            
    const hasMovies = movies?.length > 0
    
    if(!hasMovies) return

    return <ul>
        {movies.map((movie, index)=> (
            <li key={ index }>
                <h3>{movie.title}</h3>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path } alt="poster" />
            </li>   
        ))}
    </ul>    
}

export default Movies;