
// import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Restodetails from './Restodetails';
// import Card from './components/Footer';


function App() {
  return (
    <Router>
      
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Restodetails/>}/>
      



      </Routes>


        </Container>
      </main>
      </Router>
      
      
   
  );
}

export default App;
