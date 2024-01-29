import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as API from '../services/launches';
import { Box, Text, Center, Heading, Container, VStack, Spacer, Image, Tag, Button, WrapItem, Wrap } from '@chakra-ui/react';

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFligthNumber(launchId)
            .then(setLaunch)
            .catch(console.log);
    }, [launchId]);

    return (
        <>
            <Center>
                <Heading mb={6} as="h1" size="lg" m={4} color='white'>Space X Launche Details</Heading>
            </Center>
            <Center>
                <Container boxShadow='dark-lg' bg="blue.100" p={2} m={2} px={10} borderRadius={20} >
                    {!launch ? (
                        <div>Loading... </div>
                    ) : (
                        <>
                            <VStack>
                                <>
                                    <Container maxW='md' bg='blue.600' color='white'>
                                        <Center>
                                            <Text mb={6} as="h1" size="sm" m={4}>Flight number: <strong> {launch.flight_number} </strong></Text>
                                            <Text mb={6} as="h1" size="md" m={4}>Mission name:<strong> {launch.mission_name} </strong></Text>
                                            <Text mb={6} as="h1" size="md" m={4}>Launch year:<strong> {launch.launch_year} </strong></Text>

                                        </Center>
                                    </Container>
                                   {!launch.rocket ? (
                                        <div>Loading... </div>
                                    ) : (
                                        <>
                                            <Container maxW='md' bg='gray.500' color='white'>
                                                {<Center><Text as="h1" size="md" m={2} color='blue'>Rocket: {"  "}
                                                    <Link to={`/rockets/${launch.rocket?.rocket_id}`}><strong>
                                                        {launch.rocket?.rocket_name} </strong>                                                      <Wrap>
                                                            <WrapItem>
                                                                <Center w='100px' h='20px' bg='blue.200'>
                                                                <em > (More info)</em>
                                                                </Center>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Link></Text></Center>}
                                                <Box px='10'>
                                                    {<Text mb={3} as="h1" size="md" >Type: <strong>{launch.rocket.rocket_type}</strong></Text>}
                                                    {!launch.rocket.second_stage.payloads ? (
                                                        <div>Loading... </div>
                                                    ) : (
                                                        <>
                                                            {<Text mb={3} as="h1" size="md" >
                                                                Nationality: <strong>{launch.rocket.second_stage.payloads[0].nationality}</strong>
                                                            </Text>}
                                                            {<Text mb={3} as="h1" size="md" >
                                                                Payload type: <strong>{launch.rocket.second_stage.payloads[0].payload_type}</strong>
                                                            </Text>}
                                                            {<Text mb={3} as="h1" size="md" >
                                                                Manufacturer: <strong>{launch.rocket.second_stage.payloads[0].manufacturer}</strong>
                                                            </Text>}
                                                            {<Text mb={3} as="h1" size="md" >
                                                                Orbit: <strong>{launch.rocket.second_stage.payloads[0].orbit}</strong>
                                                            </Text>}
                                                            <Center>
                                                                <Image src={launch.links.mission_patch_small} boxShadow='dark-lg' alt='Mission patch' />
                                                            </Center>
                                                        </>
                                                    )
                                                    }
                                                </Box>

                                            </Container>
                                            <Container maxW='md' bg='blue.400' color='white'>
                                                {<Text mb={3} as="h1" size="md" >
                                                    Launch site: <strong>{launch.launch_site.site_name_long}</strong>
                                                </Text>}
                                            </Container>
                                            <Box as='span' px='10'>
                                                <h1><a href={launch.links.wikipedia} target="_blank">
                                                    {<FaExternalLinkAlt />}  Wikipedia
                                                </a></h1>
                                            </Box>
                                        </>
                                    )}
                                </>
                            </VStack>
                            {<Container maxW='sm' bg='yellow.500' p='5'>
                                <Center fontSize='lg' as='b'>Launch success: <Spacer />
                                    <Tag p={4} border='2px'
                                        colorScheme={launch.launch_success ? "green" : "red"}
                                        borderColor={launch.launch_success ? 'green.600' : 'red.600'}
                                    >
                                        {launch.launch_success ? "Success" : "Failure"}
                                    </Tag>
                                </Center>
                            </Container>}
                            <Center>
                                <WrapItem>
                                    <Button colorScheme='telegram' variant='outline' >
                                        <a href="javascript: history.go(-1)">Back to home</a>
                                    </Button>
                                </WrapItem>
                            </Center>

                        </>
                    )}
                </Container>
            </Center>
        </>
    )
}
