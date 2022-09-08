
import './index.css'
import Home from './pages/Home'
import Search from './pages/Search'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Settings from './pages/Settingns'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}





// export default function App() {
  

//   const navigate = useNavigate()

  


// //   const handleNavigationToRegister = () => {
// //     navigate('register')

// // }
// // const handleNavigationToLogin = () => {
// //   navigate('login')

// // }
// // const handleNavigationToSettings = () => {
// //   navigate('settings')

// }
// const handleNavigationToSearch = () => {
//   navigate('search')

// }
// const handleNavigationToHome = () => {
//   navigate('/')

// }
//   return (
//     <div class="bg-sky-500/100 ...">
//     <Routes>
//       <Route path='/*' element={<Home onLinkClick={handleNavigationToSearch} />} />
//       <Route path='search' element={ <Search onLinkClick={handleNavigationToHome} />} />
//       {/* <Route path='login' element={<Login/>}/>
//       <Route path='register' element={<Register/>}/>
//       <Route path='settings' element={<Settings/>}/> */}
//     </Routes>
//     </div>
//   )
// }

//   //   <h1 className="text-3xl font-bold underline bg-emerald-100">
//   //   Hello world!
//   // </h1>