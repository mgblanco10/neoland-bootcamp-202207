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
import Colors from "../components/Colors";


function Home({ onLogoutClick, context: { toggleTheme } }) {
  const logger = new Loggito("Home");

  const [buildings, setBuildings] = useState();
  const [workspaces, setWorkspaces] = useState();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    logger.info("componentDidMount");

    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          logger.warn(error.message);

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


    function handleYourReservationsClick () {
      navigate( "yourReservations" );

      logger.debug( "navigate to your reservations" );
  }
  function handleSolutionsClick () {
    navigate( "solutions" );

    logger.debug( "navigate to your reservations" );
}



  return (
    <div>
      <Header onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onWorkspacesClick={handleWorkspacesClick}  onYourReservationsClick={handleYourReservationsClick} onSolutionsClick={handleSolutionsClick}/>
      <Routes>
        <Route path="/" element={ buildings ? ( <Location buildings={buildings} />) : (<></>)}/>
        <Route path="workspaces" element={workspaces? (<Card workspaces={workspaces}  />):(<></>)} /> 
        <Route path="settings" element={<Settings />} />
        <Route path="yourReservations" element={<PhotoGaleria />} />
        <Route path="solutions" element={<Colors/>} />
      </Routes>
    </div>
  );
}
export default withContext(Home);

