import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function useCatImage ({ fact }){
    const [imageUrl, setImageUrl] = useState()
    
    //Ahora el useEffect para recuperar la imagen cada vez que tenemos cita o hecho nuevo
    useEffect(() => {
        if (!fact) return // al iniciar no hay fact, asi se sale sin error
        
        //const firstWord = fact.split(' ')[0] // devuelve la primera palabra
        //const firstWord = fact.split(' ').slice(0,3).join(' / ') // devuelve la 3 primeras palabras separadas por /
        
        const threeFirstWord = fact.split(' ', 3).join(' ') // otra manera de lo anterior
        console.log(threeFirstWord)
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?html=true&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact]) // cada vez que cambia el fact del anterior useEffect, se renderiza este
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}