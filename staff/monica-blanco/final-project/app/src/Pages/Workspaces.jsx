import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import retrieveWorkspaces from '../logic/retrieveWorkspaces'

function Workspaces({workspace, onLinkClick}) {
  const logger = new Loggito('workspaces')

  const [workspaces, setWorkspaces]= useState()
  const params = useParams(workspaces)
  
  logger.info('return')
  
  const locationId = params.locationId
  
  useEffect(() => {
    logger.info('workspaces the building')
    
    try {

      retrieveWorkspaces( (error, workspaces) => {
        if (error) {
            logger.warn(error.message)

            return
          }
          
          setWorkspaces(workspaces)

          logger.debug('setWorkspaces', workspaces)

                  })
                } catch (error) {
        
                    logger.warn(error.message)
                }
        
                //loadWorkspaces()
            }, [])

            const handleLinkClick = event => {
              event.preventDefault()
      
              onLinkClick()
          }
          const loadWorkspaces = () => {
            try {
                retrieveWorkspaces(sessionStorage.token, locationId, (error, workspaces) => {
                   if (error) {
                      logger.warn(error.message)
          
                            return
                    }
                     setWorkspaces(workspaces)
          
                         logger.debug('setWorkspaces', workspaces)
          
                       })
                     } catch (error) {
                  
                       logger.warn(error.message)
                      }
                  
                     loadWorkspaces()
                  }


  logger.info('return')

  return (
    <div>
      <Header />
     workspaces && workspaces.map(workspace => <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={workspace.image} alt="Workspaces PobleNou" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{workspace.name}</div>
      <p className="text-gray-700 text-base">
      {workspace.address}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        PRECIO
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onLinkClick={handleLinkClick}>
        ALQUILAR
      </span>
    </div>
  </div>)
  </div>

  )
}
export default Workspaces
