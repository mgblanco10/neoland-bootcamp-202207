import { useState } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Loggito from './utils/Loggito'
import Search from './Pages/Search'

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

    const handleNavigationToSearch = () => {
        navigate('search')
    
        logger.debug('navigate to info')
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
                <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToSearch} />} />
                <Route path="register" element={ <Register onLinkClick={handleNavigationToLogin} />} />
            </Routes>
            </div>
    )
}
export default App



// npm start

// <Route path="search" element={<Search onLinkClick={handleNavigationToHome}/>} />
// <Route path="/*" element={sessionStorage.token ? <Home onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} />



    //     <div className="flex w-full h-screen">
    //   <div className="w-full items-center justify-center lg:w-1/2">
    //     <Login/>
    //     <Register/>
    //   </div>
    //   <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center h-full bg-gray-200">
    //     <div className="w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce" />
    //     <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
    //   </div>
    // </div>

    // <div>
    // <Routes>
    //   <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLogin={handleNavigationToHome} />} />
    //   <Route path='*/' element={sessionStorage.token ? <Home onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} />
    // </Routes>

    //     </div>