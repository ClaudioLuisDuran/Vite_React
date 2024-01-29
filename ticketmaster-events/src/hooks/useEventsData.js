import { useState } from 'react';
/* import eventsJSON from '../data/events.json'; */ // solo si leo el JSON previamente descargado

const useEventsData = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
  
        //Load API data
   
        const fetchEvents = async (params) =>{
            try {
                console.log(import.meta.env.VITE_TCKMST_APIKEY);
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=VxSQ3FlnmZIUPxxNAablHsf2i4STJxjP&countryCode=MX${params?.length ? params : ''}`);
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };
      
        
        // Solo para cuando leo el JSON previamente descargado:
       /*   setTimeout(() => {
            try {
                setData(eventsJSON);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            } */
          
       /*  }, 1000); */
        

  
    
    
    return{ 
        events:data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents, 
     };
};

export default useEventsData;