import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import Detailes from './componets/Detailes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
function App() {




  return (
    <Router>
      <Header />
      <Container>
      

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/restaurant/:id' element={<Detailes />} />

      </Routes>
      </Container>
    </Router>
  );
}

export default App;
