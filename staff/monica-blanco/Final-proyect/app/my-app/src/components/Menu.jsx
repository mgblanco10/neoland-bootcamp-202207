import './Menu.css'
import IconButton from './IconButton'
import withContext from '../utils/withContext'
import { useLocation } from 'react-router-dom'

function Menu({ onLogoutClick, onSettingsClick, context: { toggleTheme } }) {

    const location = useLocation()

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    return <div className="Menu">
        <ul className="Menu-panel">
            {location.pathname !== '/settings' && <li className="Menu__item">
                <IconButton text="settings" onClick={handleSettingsClick}/>
            </li>}
            <li className="Menu__item">
                <IconButton text="light" onClick={toggleTheme} />
            </li>
            <li className="Menu__item">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}

export default withContext(Menu)