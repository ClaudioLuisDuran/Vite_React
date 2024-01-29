import { useEffect, useState, useRef } from "react"

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        } // banderita para saber que es la primera vez de uso del input

        if (search === '') {
            setError('No se puede buscar una pelicula vacía')
            return
        }
        if (search.match(/\d+$/)) {
            setError('No se puede buscar una pelicula con un número')
            return
        }
        if (search.length < 3) {
            setError('La búsqueda debe tener al menos 3 caracteres')
            return
        }
        setError(null)
    }, [search])

    return { search, updateSearch, error }
}