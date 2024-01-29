import { Center, Box, Badge, Flex, Text, Tag, Spacer, Container, Button } from '@chakra-ui/react';
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { Link } from 'react-router-dom';

export function LaunchItem(launch) {
  return (
    <Container maxW='md' p={1} bg='blue.400' borderRadius={20} >
      <Box boxShadow='dark-lg' bg="blue.100" p={2} m={2} px={10} borderRadius={20} >
        <Flex display="flex">
          <Badge borderRadius='full' px='2' colorScheme='blue'>
            Misión <Text fontSize="lg">
              {launch.mission_name}
            </Text>
          </Badge>
          <Tag p={4} border='2px'
            colorScheme={launch.launch_success ? "green" : "red"}
            borderColor={launch.launch_success ? 'green.600' : 'red.600'}>
            {launch.launch_success ? "Success" : "Failure"}
          </Tag>
        </Flex>
        <Spacer />
        <Flex>
          <FaCalendarCheck />
          <Text fontSize="md">
            --   {launch.launch_year}   --
          </Text>
        </Flex>
        <Flex>
          <IoIosRocket /> [  {launch.rocket.rocket_name}  ]
        </Flex>
        <Center><Flex>
          <Link to={`/launch/${launch.flight_number}`}>
            <Button size='sm' border='2px' borderColor='green.600' position="absolute" >More details</Button>
          </Link>
        </Flex></Center>
      </Box>
    </Container>
  )
}