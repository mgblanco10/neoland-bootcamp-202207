import { useState, useEffect } from 'react'
import Header from '../components/Header';
import Settings from '../Pages/Settings'
import Workspaces from '../Pages/Workspaces'
import Loggito from '../utils/Loggito';
import retrieveUser from '../logic/retrieveUser'
import withContext from '../utils/withContext'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import PhotoGaleria from '../components/PhotoGaleria';


function Home({ onLogoutClick, onLinkClick, context: { handleFeedback, toggleTheme} }) {
    const logger = new Loggito('Home')

    const navigate = useNavigate()
    const location = useLocation

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    useEffect(() => {
        logger.info('componentDidMount')
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)

                    onLogoutClick()

                    return
                }

            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }, [])

    const handleSettingsClick = () => {
        navigate('settings')

        logger.debug('navigate to settings')

    }

    const handleWorkspacesClick = () => {
        navigate('workspaces')

        logger.debug('navigate to workspaces')

    }


    return (
        <div>
            <Header onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onWorkspacesClick={handleWorkspacesClick}  />
            <Routes>
                <Route path='/' element={<PhotoGaleria onClick={handleLinkClick} />} />
                <Route path="settings" element={<Settings onClick={handleSettingsClick} />} />
                <Route path="workspaces" element={<Workspaces onClick={handleWorkspacesClick} />} />
            </Routes>

        </div>
    )
}
export default withContext(Home)



