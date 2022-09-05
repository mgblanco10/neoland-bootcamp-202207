
import './IconButton.css'

function IconButton({onClick, text,classMenu}) {

    return <button className={`IconButton transparent-button ${classMenu} `} onClick={onClick}><span className="material-symbols-outlined">{text}</span></button>
}

export default IconButton
