const SearchMovies = async (movie)=> {

    const API_KEY = "91c3647faa5a1f3002a0d55a2aec26f9"

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ API_KEY }&query=${ movie }`)
        const data = await response.json()
        const movies = data.results

        return movies?.map(mv => (
            {
                title: mv.title,
                poster_path : mv.poster_path                
            }
        ))
    }catch(e) {
        throw new Error("Error: fetch api movies")
    }
}

export default SearchMovies;