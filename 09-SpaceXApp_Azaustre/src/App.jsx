import { Routes, Route, Link } from 'react-router-dom'; /* Link es para enlazar a otra página interna */
import logo from "./assets/logo_spaceX.jpg";
import { Center } from '@chakra-ui/react';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetais';
import "./css/App.css";

export function App() {

  return (
    <>
      <div className="app">
        <Center>
          <Link to={`/`}>
            <img src={logo} width={500} />
          </Link>
        </Center>

        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path='launch/:launchId' element={<LaunchDetails />} />
          <Route path="rockets/:rocketId" element={<RocketDetails />} />
        </Routes>
      </div>
    </>
  );
}
