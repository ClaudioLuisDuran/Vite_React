import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movie'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export function App() {
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({search, sort})

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }

    const handleSort = () =>{
        setSort(!sort)
    }

    const debounceGetMovies = useCallback( // el useCallback no se renderea hasta no cambiar la dependencia
        debounce(search => {
        getMovies({search})
    }, 300),[getMovies]) //300 milisegundos de espera

    const handleChange = (event) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
        debounceGetMovies(newSearch)
    }

    return (

        <div className='page'>
            <header>
                <h1>Buscador de películas</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search} placeholder='Star Wars, Avengers, Matrix...' />
                    <input type='checkbox' onChange={handleSort} checked={sort} />
                    <button type='submit'>Buscar peli</button>
                </form>
                {error && <p style={{ justifyContent: 'center', color: 'red' }}>{error}</p>}
            </header>

            <main>
                {
                    loading ? <p>Cargando...</p> : <Movies movies={movies} />
                }
                
            </main>
        </div >
    )
}