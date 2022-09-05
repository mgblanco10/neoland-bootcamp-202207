import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePicker.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { DateRangePicker } from 'react-date-range';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Typography } from '@mui/material';


const selectionRange = {
    startDate: new Date (2022, 8, 4),
    endDate: new Date (2022, 8, 4),
    key: "selection"
}

const DatePicker = () =>{
    const handlerSelectDate = () => {}

    
    return (
        <div className="datePicker">
            <DateRangePicker ranges={[selectionRange]} className="datePickerCalendar"
                onChange={handlerSelectDate}

            />
            <div className="navigatorSearch">
          <IconButton aria-label='Add to Laptop'>
            <Typography variant = "h6" className='searchOffice'> Search Office</Typography>
                    <LaptopChromebookIcon fontSize='large'/>
        </IconButton>

        </div>
            <Button> Open Calendar</Button>
            <Button> Close Calendar</Button>
        </div>
    )
}

export default DatePicker

//la idea es que el Button ciere el calendario y desaparezca
//y aparezca otro que diga close Calendar
// al apretar el button del ordenador te llevaria a search
//tiene una navegación
//debo pensar que haría si quisiera cerrar el calendario sin seeccionar fecha
//podría ser una opción el apretar en cualquier sitio
//botton del ordenador aplicar una ruta a search

