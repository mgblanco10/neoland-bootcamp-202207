import { useState } from 'react'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import Feedback from './components/Feedback'
import Context from './utils/Context'
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
//import Office from './components/Office';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Search from './pages/Search'
import Map from './pages/Map'
import Office from './components/Office';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import DatePicker from './components/DatePicker';




function App() {
  const navigate = useNavigate()
  return (
    <div>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='map' element={<DatePicker/>}/>

    </Routes>

        </div>
  );
}

export default App;

{/* <Search/>  */}
{/* <Home/>      */}


//<Map/> 

// <Header/>  
// <div>
// </div>

// npm start



// <Context.Provider value={handleFeedback}>

//</Context.Provider>
