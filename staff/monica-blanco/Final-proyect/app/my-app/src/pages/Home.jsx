import Banner from '../components/Banner'
import Header from '../components/Header'
import GaleriaOffice from '../components/GaleriaOffice'
import DatePicker from '../components/DatePicker'
// import PickerDate from '../components/PickerDate'
// <PickerDate/> 
import './Home.css'

const Home = () =>{
    return (
        <>
        <Header/>
        <div className='home'>
            <div className='dates'>
            </div>
            <Banner/>
            <div className='section'>
            <GaleriaOffice/>
            <GaleriaOffice/>
            <GaleriaOffice/>
            <GaleriaOffice/>
            </div>
        </div>
        </>
    )
}

export default Home

//GALERIA VER COMO LLAMARLO CON UN MAP A ESAS FOTOS AL IGUAL QUE EN COMPONENT OFFICE
//<DatePicker/>