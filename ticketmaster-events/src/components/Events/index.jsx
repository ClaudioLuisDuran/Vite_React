import { useNavigate } from "react-router-dom";
import EventItem from "./components/EventsItem";
import { Box, Text } from "@chakra-ui/react";


const Events = ({ searchTerm, events }) => {
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm));

        }

        return eventsFiltered.map((eventItem) => (
            
            <Box w='100%' p={2} m={3} borderWidth='2px' borderRadius='lg' borderColor={"black"} bg={"blue.100"}>
                    <EventItem
                        key={`event-item-${eventItem.id}`}
                        name={eventItem.name}
                        info={eventItem.info}
                        image={eventItem.images[0].url}
                        onEventClick={handleEventItemClick}
                        id={eventItem.id}
                    />
             </Box>
               
        ));
    };



    return (
       
           
        <div>
            <Text as='i'  color='red.500' > Esta App de prueba usa la API de Ticketmaster, React, Chakra, CSS y HTML. </Text>
           <br />
           <Text as='b' fontSize='xl' color='blue.500' > Eventos publicados para México </Text>
            {renderEvents()}
        </div>
       

    );
};

export default Events;