import { useEffect, useState, Link } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';
import { format } from 'date-fns';
import { Button, Box, Image, Center, Text } from '@chakra-ui/react'

const Detail = () => {
    const { eventId } = useParams();
    const [evenData, setEventData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEvenData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=VxSQ3FlnmZIUPxxNAablHsf2i4STJxjP`);
                const data = await response.json();
                setEventData(data);
                setIsLoading(false);
            } catch (error) {
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        };
        fetchEvenData();
    }, []);

    if (isLoading && Object.keys(evenData) === 0) {
        return <div>Loading event...</div>;
    }

    if (Object.keys(error) > 0) {
        return <div>Ha ocurrido un error al cargar el evento.</div>;
    }

    const handledGo=()=>{
        window.location.href=`/`
    }

    console.log(evenData);
    return (
        <Box w='100%' p={2} m={3} borderWidth='2px' borderRadius='lg' borderColor={"black"} bg={"blue.200"} >
       {/* className={styles.mainInfoContainer} */}
            <Box p={10} m={5} borderWidth='1px' borderRadius='lg' borderColor={"blue.300"} bg={"blue.100"}>
            <h3 className={styles.eventName}>{evenData.name}</h3>
                <Center>
                    <Image className={styles.eventImage} src={evenData.images?.[0].url} alt={evenData.name} p={7}  />
                    </Center>
                
                <p className={styles.evenInfo}>{evenData.info}</p>
                

              {/*   <p>{format(new Date(evenData.dates?.start?.localDate), 'd LLLL yyyy H:mm')} </p> */}
            </Box>
            <Box p={5} m={2}>
                <Text as='b' p={5}>Mapa del evento</Text> 
               <Center> <Image p={7} src={evenData.seatmap?.staticUrl}/></Center>
            
            <p>{evenData.pleaseNote}</p>
          </Box>
            <div>
            <p />
               <p><strong>¿Quiere boletos?: </strong>   <a href={evenData.url} target="blank">{evenData.url} </a></p>
               <p/>
               <br />
                <Button type='button' onClick={handledGo} colorScheme='teal' size='md'>
                     Ver todos los eventos
                </Button>
            </div>
      
        </Box>
    );
};

export default Detail