
function Search({onLinkClick}) {
    
    const handleLinkClick = event => {
            event.preventDefault()
        
            onLinkClick()
        } 
         return (
            <div>
               search
        <img src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g"onClick={handleLinkClick}/>
      
            </div>
        )
    }
    export default Search