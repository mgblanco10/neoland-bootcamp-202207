import { useState, useEffect } from "react";
import Header from "../components/Header";
import Settings from "../Pages/Settings";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import retrieveBuildings from "../logic/retrieveBuildings";
import retrieveWorkspacesOfBuilding from "../logic/retrieveWorkspacesOfBuilding";
import withContext from "../utils/withContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import PhotoGaleria from "../components/PhotoGaleria";
import Location from "../components/Location";
import Card from "../components/Card";

function Home({ onLogoutClick, context: { toggleTheme } }) {
  const logger = new Loggito("Home");

  const [buildings, setBuildings] = useState();
  const [workspaces, setWorkspaces] = useState();
  const navigate = useNavigate();
  const location = useLocation();

//   const handleLinkClick = (event) => {
//     event.preventDefault();

//     onLinkClick();
//   };

  useEffect(() => {
    logger.info("componentDidMount");

    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          logger.warn(error.message);

        //   onLogoutClick();

          return;
        }
      });
    } catch (error) {
      logger.warn(error.message);
    }

    loadBuildings();
  }, []);

  const loadBuildings = () => {
    try {
      retrieveBuildings(sessionStorage.token, (error, buildings) => {
        if (error) {
          logger.warn(error.message);

          onLogoutClick()

          return;
        }

        setBuildings(buildings);

        logger.debug("setBuildings", buildings);
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };

    const loadWorkspaces = () => {
    try {
        retrieveWorkspacesOfBuilding(sessionStorage.token, buildings, (error, workspaces) => {
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
    
        
        

          


  function handleSettingsClick () {
        navigate( "settings" );

        logger.debug( "navigate to settings" );
    }

  function handleWorkspacesClick () {
        navigate( "workspaces" );

        logger.debug( "navigate to workspaces" );

        loadWorkspaces()
    }



  return (
    <div>
      <Header onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onWorkspacesClick={handleWorkspacesClick} />
      <Routes>
        <Route path="/" element={ buildings ? ( <Location buildings={buildings} />) : (<></>)}/>
        <Route path="workspaces" element={workspaces? (<Card workspaces={workspaces}  />):(<></>)} /> 
        <Route path="settings" element={<Settings onClick={handleSettingsClick} />} />
      </Routes>
    </div>
  );
}
export default withContext(Home);



{/* <Route path="workspaces" element={<Workspaces onClick={handleWorkspacesClick} />} /> */}

//     <p>{buildings[0].name}</p>
// <img src={buildings[0].image}/>

//<Route path='/' element={<PhotoGaleria onClick={handleLinkClick} />} />  
{
  /* <p>{builgings[0].name}</p> */
}

{
  /* <p>{buildings[0].name}</p>  */
}
{
  /* <img src={buildings[0].image}/> */
}

{
  /* <p>{builgings[0].name}</p>  */
}

{
  /* <Edifice buildings={buildings}/>

{buildings && buildings.map(buildings => {
       return <li key={buildings._id}>
               <p>{buildings.name}</p>
               <p>{buildings.description}</p>
               </li> */
}
