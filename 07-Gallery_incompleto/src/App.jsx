
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-dom';
import Tur_1 from './components/Tur_1';
import Tur_3 from './components/Tur_3';
import Tur_4 from './components/Tur_4';
import Tur_2 from './components/Tur_2';

function App() {

  return (
    <>
     <Router>
      <Route path="/tur1" component={Tur_1}  />
      <Route path="/tur2" component={Tur_2}  />
      <Route path="/tur3" component={Tur_3}  />
      <Route path="/tur4" component={Tur_4}  />

      
     </Router>

    </>
  )
}

export default App
