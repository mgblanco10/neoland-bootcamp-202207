import { useState } from 'react'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
//import Feedback from './components/Feedback'
// import Context from './utils/Context'
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
//import Office from './components/Office';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Search from './pages/Search'
import Map from './pages/Map'
import Office from './components/Office';
import { BrowserRouter as Routes, Route, } from 'react-router-dom'
import DatePicker from './components/DatePicker';



function App() {
  return (
    <div>
  <Home/>     
        </div>
  );
}

export default App;

{/* <Search/> */}
{/* <DatePicker/> */}


//<Map/> 

// <Header/>  
    // <div>
    // <Routes>
    // <Route path='/' element={<Home/>}/>
    // <Route path='search' element={<Search/>}/>
    // <Route path='map' element={<Map/>}/>
    // </Routes>
    // </div>




