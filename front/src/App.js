import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from 'react';


import Header from './components/Header'


import HomeScreen from './screens/HomeScreen'
import BankList from './screens/BankList'
import BankDetail from './screens/BankDetail'
import MovementList from './screens/MovementList'
import MovementDetail from './screens/MovementDetail'
import AccountList from './screens/AccountList'
import AccountDetail from './screens/AccountDetail'

function App() {

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/banks" element={<BankList/>} />
          <Route path="/banks/:pk" element={<BankDetail/>} />
          <Route path="/:id/accounts" element={<AccountList/>} />
          <Route path="/:id/accounts/:pk" element={<AccountDetail/>} />
          <Route path="/:id/movements" element={<MovementList/>} />
          <Route path="/:id/movements/:pk" element={<MovementDetail/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
