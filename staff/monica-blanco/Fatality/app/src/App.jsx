import { useState } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Settings from './Pages/Search'
import Loggito from './utils/Loggito'

import Feeckback from './components/Feeckback'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


function App () {
    const logger = new Loggito('App')

    const navigate = useNavigate()

    const handleNavigationToRegister = () => {
        navigate('register')

        logger.debug('navigate to register')
    }

    const handleNavigationToLogin = () => {
        navigate('login')
    
        logger.debug('navigate to login')
    }


    const handleNavigationToHome = () => {
        navigate('/')
    
        logger.debug('navigate to home')
    }

    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
    }

    logger.info('return')
    
    return (   
        <div>
        <Routes>
       <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
        <Route path="register" element={sessionStorage.token ? <Navigate to="/" /> :  <Register onLinkClick={handleNavigationToLogin} />} />
         <Route path="/*" element={sessionStorage.token ? <Home onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} />
        </Routes>      
         </div>

            )
        }
        export default App
            
            

