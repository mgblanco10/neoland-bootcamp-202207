import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import Card from '../components/Card'
import withContext from '../utils/withContext'

function Workspaces({ onLinkClick, onClick, context: { handleFeedback } }) {
  const logger = new Loggito('workspaces')

  const handleLinkClick = event => {
    event.preventDefault()

    onLinkClick()
  }

  // useEffect(() => {
  //   logger.info('"componentDidMount"')
  //   try {
  //     retrieveWorkspacesOfBuilding(sessionStorage.token, buildingId (error, workspaces) => {
  //       if (error) {
  //           logger.warn(error.message)

  //                   return
  //               }
  //               setWorkspaces(workspaces)

  //                   logger.debug('setWorkspaces', workspaces)

  //                 })
  //               } catch (error) {
  //                   handleFeedback({ message: error.message, level: 'error' })
        
  //                   logger.warn(error.message)
  //               }
        
  //               loadNotes()
  //           }, [])




  logger.info('return')

  return (
    <div>
      <Header />

      <button className="anchor" onClick={handleLinkClick} >Home</button>
      <div class="flex flex-row">


        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>

      </div>
      <div class="flex flex-row">

        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>

      </div>

      <div class="flex flex-row">

        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>
        <div class="w-30 md:w-60 lg:w-80 mx-5 py-7">  <Card /> </div>

      </div>


    </div>

  )
}
export default withContext(Workspaces)
