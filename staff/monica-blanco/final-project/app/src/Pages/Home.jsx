import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Settings from '../Pages/Settings'
import Workspaces from '../Pages/Workspaces'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveBuildings from '../logic/retrieveBuildings'
import withContext from '../utils/withContext'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import PhotoGaleria from '../components/PhotoGaleria'
import Edifice from '../components/Edifice'


function Home({ onLogoutClick, onLinkClick, context: { toggleTheme} }) {
    const logger = new Loggito('Home')

    const [buildings, setBuildings] = useState(null)
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
                    logger.warn(error.message)

                    onLogoutClick()

                    return
                }

            })
        } catch (error) {
            logger.warn(error.message)
        }

        loadBuildings()
        
    }, [])

    const loadBuildings = () => {
        try {
            retrieveBuildings(sessionStorage.token, (error, buildings) => {
                if (error) {
    
                    logger.warn(error.message)

                    return (buildings)
                }

                setBuildings(buildings)

                logger.debug('setBuildings', buildings)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }

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

//             <p>{buildings[0].name}</p>
// <img src={buildings[0].image}/> 



{/* <Route path='/' element={<Edifice buildings={buildings} onClick={handleLinkClick} />} />  */}

{/* <p>{builgings[0].name}</p> */}

{/* <p>{buildings[0].name}</p>  */}
{/* <img src={buildings[0].image}/> */}

{/* <p>{builgings[0].name}</p>  */}





{/* <Edifice buildings={buildings}/>

{buildings && buildings.map(buildings => {
       return <li key={buildings._id}>
               <p>{buildings.name}</p>
               <p>{buildings.description}</p>
               </li> */}
