import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Header from '../components/Header';
import Settings from '../components/Header'
import Loggito from '../utils/Loggito';
import retrieveUser from '../logic/retrieveUser'


export default function Home({onLogoutClick}) {
    const logger = new Loggito ('Home')

    const navigate = useNavigate()
    const location = useLocation

    useEffect(()=>{ 
        logger.info('componentDidMount')
    try {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {

                logger.warn(error.message)

                onLogoutClick()

                return
            }
        
        })
    } catch (error) {

        logger.warn(error.message)
    }
    }, [])
    const handleSettingsClick = () => {
        navigate('settings')

        logger.debug('navigate to settings')
    
    }
    const handleSettingsCloseClick = () => {
        navigate('/')

        logger.debug('navigate to list')
    }

    return ( 
        <div>
        <Header onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick}/>
    
            <Routes>
            <Route path="settings" element={<Settings onCloseClick={handleSettingsCloseClick}/>}/>
            </Routes>
            
        </div>
    )
}



