import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

// Hacemos un customHooks para traer la URL de la imagen del gato
// Dentro de los customHooks podemos usar los hooks de react

export function useCatFact () {
    const [fact, setFact] = useState()
    const refreshFact = () =>{
        getRandomFact().then(newFact => setFact(newFact))
    }
    // ahora hacemos el fetching de datos a API del hecho
    useEffect(refreshFact, [])

    return {fact, refreshFact}

    // En [...] se colocan dependencias que pueden cambiar solamente
    // Si queda vacia se renderiza el useEffect la 1º vez solamente
    // y si lleva una dependencia, cuando esta cambie tambien.
    // Si no ponemos el [] se renderiza cada vez. OJO, puede dar loop infinito.

    // Otra manera de hacer el fetch es con async - await:
    // useEffect(() =>{
    //    async function getRandomFact(){
    //    const res = = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //    const json = await res.json()
    //    setFact(json.fact)
    //    } 
    //   getRandomFact()
    // },[])
}