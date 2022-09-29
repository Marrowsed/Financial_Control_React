import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from 'react';


import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import BankScreen from './screens/BankScreen'
import MovementScreen from './screens/MovementScreen'

function App() {

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/banks" element={<BankScreen/>} />
          <Route path="/movements" element={<MovementScreen/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
