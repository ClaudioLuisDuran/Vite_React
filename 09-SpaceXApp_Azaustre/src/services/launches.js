/* Conexión con API de lanzamientos de SpaceX */

const API_URL = "https://api.spacexdata.com/v3"; /* Raiz de la API */

/* Todos los datos */
export async function getAllLaunches(){
    /* try, por si hay error en la conexión */
 try {
    const response = await fetch(`${API_URL}/launches`); /* URL de lanzamientos */
    const data = await response.json();
    return data;
 } catch (error) {
    console.error(error);
 }   
}

/* Datos por número de vuelo */
export async function getLaunchByFligthNumber(flight_number)  {
    try {
        const response = await fetch(`${API_URL}/launches/${flight_number}`); /* URL de lanzamientos */
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }
}

/* Datos por id de cohete */
export async function getRocketById(rocket_id)  {
    try {
        const response = await fetch(`${API_URL}/rockets/${rocket_id}`); /* URL de cohetes */
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }
}