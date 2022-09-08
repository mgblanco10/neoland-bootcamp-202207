

function Home({onLinkClick}) {
    
    const handleLinkClick = event => {
            event.preventDefault()
        
            onLinkClick()
        } 
         return (
            <div class="bg-blue-500 md:bg-green-500 ...">
      <img className="imgInfo" src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g"onClick={handleLinkClick}/>
      
            </div>
        )
    }
    export default Home
    
    
    // <div class="bg-fixed ..." style="background-image: url(https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g)"></div>
        //     return (
            //         <div>
            //            Home
            //         </div>
            //     )
            // }
            
    //     (<div>
            
    //             <p> Welcome!!! </p>
    //         <p> Writing notes has never been so easy and fun...
    // Press the button in the shape of a house to start </p>
    //         {/* <a className="anchor" href="#" onClick={handleLinkClick}>Home</a> */}
    //     </div>)  
    //     }
    // export default Home