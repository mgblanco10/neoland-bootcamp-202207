import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Header from '../components/Header';
import Settings from '../Pages/Settings'
import Loggito from '../utils/Loggito';
import retrieveUser from '../logic/retrieveUser'
import PhotoGaleria from '../components/PhotoGaleria';


export default function Home({onLogoutClick, onLinkClick}) {
    const logger = new Loggito ('Home')

    const navigate = useNavigate()
    const location = useLocation
    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

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
 
  
    return ( 
        <div>
        <Header onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick}/>
    
            <Routes>
            <Route path='/' element={<PhotoGaleria onClick={handleLinkClick}/>}/>
            <Route path="settings" element={<Settings onClick={handleSettingsClick}/>}/>
            </Routes>
            
        </div>
    )
}



