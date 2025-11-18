import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MarketPage from './pages/MarketPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

import React, { useState, createContext } from 'react';

const AuthContext = createContext("");

function App() {
  const [token, setToken] = useState('');

  const onLogin = (token) => {
    if (!token) return;

    token = token.substring(7);

    console.log('Parsed Token: ' + token);

    setToken(token);

    document.cookie = `token=${token}; path=/`;


    return (
      window.location = '/home'
    );
  }

  return (
    <AuthContext.Provider value={token}>
      <BrowserRouter>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<LoginPage onLogin={onLogin} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/market" element={<MarketPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App
