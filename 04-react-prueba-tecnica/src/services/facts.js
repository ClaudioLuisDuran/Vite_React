const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' // Hecho aleatorio de la primera API


export const getRandomFact = async () =>{
   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT) // promesa
    const data = await res.json()
    const { fact } = data
    return fact
}