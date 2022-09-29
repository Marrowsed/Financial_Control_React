import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => {
    return (
        <div className="App">
            <header className='d-flex justify-content-center'>
                <h1>Financial Control</h1>
                <img src={logo} className="App-logo img" alt="logo" />
            </header>
        </div>
    )
}

export default Header