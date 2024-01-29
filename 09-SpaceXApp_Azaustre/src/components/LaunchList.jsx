import { useState, useEffect } from 'react';
import { SimpleGrid, Center, Heading, Container } from '@chakra-ui/react';
import { LaunchItem } from './Launchitem';
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <section>
        <Center>
          <Heading mb={6} as="h1" size="lg" m={4} color='white'>Space X Launches</Heading>
        </Center>
        <Center>
          <Heading mb={6} as="h6" size="md" color='white'>App made using the Space API.
            Technology used: React Vite, Js, Html, CSS.</Heading>
        </Center>
        {launches.length == 0 ? (
          <div>Loading...</div>) : (
          <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            {launches.map((launch) => (
              <LaunchItem key={launch.fligth_number} {...launch} />
            ))}
          </SimpleGrid>
        )}
      </section>
    </>
  )
}