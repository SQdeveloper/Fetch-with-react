import { useCallback, useMemo, useRef, useState } from "react";
import SearchMovies from "./SearchMovies";

const UseMovies = (movie, sort)=> {        
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)    
    const prevMovie = useRef("")

    const getMovies = useCallback(async ()=> {
        if(prevMovie.current === movie) return        

        setLoading(true)        
        const newMovies = await SearchMovies(movie)
        prevMovie.current = movie
        setMovies(newMovies)
        setLoading(false)        
    }, [movie])

    const sortMovie = useMemo(()=> {                
        return sort ? 
            [...movies].sort((a,b)=> a.title.localeCompare(b.title)): movies
        }, [movies, sort]) 


    return {movies: sortMovie, getMovies, loading};
}

export default UseMovies;