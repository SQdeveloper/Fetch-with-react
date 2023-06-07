import { useEffect, useRef, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import UseMovies from './components/UseMovies';

function UseSearch() {
    const [search, setSearch] = useState("")
    const [error, setError] = useState("")
    const isFirstInput = useRef(true)

    useEffect(()=>{
        if(isFirstInput.current) {
            isFirstInput.current = search === ""            
            return
        }

        if(search === "") {
            setError("La busqueda no puede estar vacia.")
            return
        }

        if(search.length < 3) {
            setError("La busqueda no puede tener menos de 3 letras.")   
            return
        }                 
        
        setError(null)
    }, [search])

    return {search, error, setSearch};
}

function App() {
    const {search, error, setSearch} = UseSearch()
    const [sort, setSort] = useState(false)
    const {movies, getMovies, loading} = UseMovies(search, sort)

    const handleChangeInput = (e)=> {        
        if(e.target.value.startsWith(" ")) return
        setSearch(e.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        getMovies()
    }

    const handleCheck = ()=> {
        setSort(!sort)
    }

    return (
        <div className="App">
        <header>
                <h1>Looking for Movies</h1>
                <form className="form" onSubmit={ handleSubmit }>
                    <input type="text" value={ search } onChange={ handleChangeInput } name="name" placeholder="avengers, panther, marvel, etc" required />
                    {error && <p style={{ color:"red" }}>{ error }</p>}
                    <button style={{ fontWeight:"bold" }}> Send </button>
                    <input type="checkbox" onChange={ handleCheck }></input>
                </form>
        </header>

        <main>
            {loading ? <h4>Loading...</h4> : <Movies movies={ movies }/>}            
        </main>
        </div>
    );
}

export default App;
