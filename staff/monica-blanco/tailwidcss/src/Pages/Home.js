import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home({onLinkClick}) {
    
    const navigate = useNavigate()

    const handleNavigationToLogin = () => {
          navigate('login')
        
        }
         return (
            <div class="bg-blue-500 md:bg-green-500 ...">
      <img className="imgInfo" src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g" onLinkClick={handleNavigationToLogin}/>
      
            </div>
        )
    }
    export default Home


//     return (
//       <h1 className="text-3xl font-bold underline">
//         MARAVILLORO REGISTRO
//       </h1>
//     )
//   }