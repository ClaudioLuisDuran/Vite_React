import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as API from '../services/launches';
import { Box, Text, Center, Heading, Container, Image, Button, WrapItem } from '@chakra-ui/react';
import rocketsPhoto from "../assets/rockets 2.jpg";

export function RocketDetails() {
    const [rocket, setRocket] = useState({});
    const { rocketId } = useParams();

    useEffect(() => {
        API.getRocketById(rocketId)
            .then(setRocket)
            .catch(console.log);
    }, [rocketId]);

    return (
        <>
            <Center>
                <Heading mb={6} as="h1" size="lg" m={4} color='white'>Space X Rocket Details</Heading>
            </Center>
            <Center>
                <Container maxW='lg' boxShadow='dark-lg' bg="blue.100" p={2} m={2} px={30} borderRadius={20} >
                    {!rocket ? (
                        <div>Loading... </div>
                    ) : (
                        <>
                            <Box maxW='xlg' bg='blue.600' color='white'>
                                <Center>
                                    <Text fontSize='2xl' as="h1" size="sm" m={1}> <strong> {rocket.rocket_name} </strong></Text>
                                </Center>
                                <Center>
                                    <Text mb={5} size="md" m={4}><em>" {rocket.description} "</em></Text>
                                </Center>
                                <Text mb={4} as="h1" size="md" m={4}>First flight:<strong> {rocket.first_flight} </strong></Text>
                                <Text mb={6} as="h1" size="sm" m={4}>Country: <strong> {rocket.country} </strong></Text>
                                <Text mb={5} as="h1" size="md" m={4}>Company: <strong><em>" {rocket.company} "</em></strong></Text>
                                {!rocket.height ? (
                                    <div>Loading... </div>
                                ) : (
                                    <Text mb={4} as="h1" size="md" m={4}>Height:<strong> {rocket.height.meters}</strong></Text>
                                )}
                                {!rocket.diameter ? (
                                    <div>Loading... </div>
                                ) : (
                                    <Text mb={4} as="h1" size="md" m={4}>Diameter:<strong> {rocket.diameter.meters} mts.</strong></Text>
                                )}
                                {!rocket.mass ? (
                                    <div>Loading... </div>
                                ) : (
                                    <Text mb={4} as="h1" size="md" m={4}>Mass:<strong> {rocket.mass.kg} Kgs.</strong></Text>
                                )}
                                <Center>
                                    <Box as='span' px='10'>
                                        <h1><a href={rocket.wikipedia} target="_blank">
                                            {<FaExternalLinkAlt />}  More info <em>(Wikipedia)</em>
                                        </a></h1>
                                    </Box>
                                </Center>
                            </Box>
                            <Center>
                                <Image src={rocketsPhoto} boxShadow='dark-lg' alt='Rockets SpaceX' />
                            </Center>
                            <Center>
                                <WrapItem>
                                    <Button colorScheme='telegram' variant='outline' >
                                        <a href="javascript: history.go(-1)">Back to launch</a>
                                    </Button>
                                </WrapItem>
                            </Center>
                        </>)
                    }
                </Container>
            </Center>
        </>
    )
}