import Loggito from '../utils/Loggito'
import handleCreateReservation from '../logic/createReservation'
import withContext from '../utils/withContext'


function NewReservation({  context: { handleFeedback } }) {
    const logger = new Loggito('New Reservation')

    logger.info('return')


      
    return (
   <h1>hola</h1>
   )    
   }
   export default NewReservation