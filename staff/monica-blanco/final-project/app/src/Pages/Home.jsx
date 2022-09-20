import { useState, useEffect } from "react";
import Header from "../components/Header";
import Settings from "../Pages/Settings";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import retrieveLocations from "../logic/retrieveLocations";
import retrieveWorkspaces from "../logic/retrieveWorkspaces";
import retrieveReservation from "../logic/retrieveReservation";
import retrieveAllReservations from "../logic/retrieveAllReservation";
import withContext from "../utils/withContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import PhotoGaleria from "../components/PhotoGaleria";
import Location from "../components/Location";
import Colors from "../components/Colors";
import Workspaces from "./Workspaces";
import NewReservation from "../components/NewReservation"



function Home({ onLogoutClick, context: { toggleTheme } }) {
  const logger = new Loggito("Home");

  const [locations, setLocations] = useState();
  const [workspaces, setWorkspaces] = useState();
  const [reservation, setReservation] = useState();
  const[reservations, setReservations] = useState();
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

    loadLocations();
  }, []);

  const loadLocations = () => {
    try {
      retrieveLocations(sessionStorage.token, (error, locations) => {
        if (error) {
          logger.warn(error.message);

          onLogoutClick();

          return;
        }

        setLocations(locations);

        logger.debug("setLocations", locations);
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };

  const loadWorkspaces = (locationId) => {
    try {
      retrieveWorkspaces(locationId, (error, workspaces) => {
        if (error) {
          logger.warn(error.message);

          return;
        }
        setWorkspaces(workspaces);

        logger.debug("setWorkspaces", workspaces);
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };
  const loadReservation = (reservationId) => {
    try {
      retrieveReservation(sessionStorage.token, reservationId, (error, user) => {

        if (error) {
          logger.warn(error.message);

          return;
        }
        setReservation(reservationId);

        logger.debug("setReservation", reservation);
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };
//===Y AHORA CON ESTO???
  const loadReservations = () => {
    try {
      retrieveAllReservations(sessionStorage.token,reservations, (error, user) => {

        if (error) {
          logger.warn(error.message);

          return;
        }
        setReservations(reservations);

        logger.debug("setReservations", reservations);
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };


//===SettingsHEADER
  function handleSettingsClick() {
    navigate("settings");

    logger.debug("navigate to settings");
  }

//====Information HEADER
  function handleInfoClick() {
    navigate("info");

    logger.debug("navigate to info");
  }

//====Solution HEADER
  function handleSolutionsClick() {
    navigate("solutions");

    logger.debug("navigate to your reservations");
  }

//===Home Header BUILDINGS
  function handleNavigationToHomeClick () {
    navigate('/')

    logger.debug('navigate to home')

}

//boton de BUILDINGS Y NAVEGA A WORKSPACES
  const handleLocationClick = (locationId) => {
    
    loadWorkspaces(locationId);
    
    navigate(`locations/${locationId}/workspaces`);
  };


//Boton Input de CreateReservation AHORA COMO UTILIZO ESTO?
  const handleCreateReservationClick = (workspaceId) => {

    loadReservation(workspaceId)

    navigate(`/workspaces/${workspaceId}/reservations`)

    logger.debug('navigate to reservation')
  }





  logger.info('return')

  return (
    <div>
      <Header
        onLogoutClick={onLogoutClick}
        onSettingsClick={handleSettingsClick}
        onHomeClick={handleNavigationToHomeClick}
        onInfoClick={handleInfoClick}
        onSolutionsClick={handleSolutionsClick}
      />
      <Routes>

        {/* BUILDING */}
        <Route path="/" element={locations ? ( <Location locations={locations} onClick={handleLocationClick} />) : ( <>hola</> ) }/>


        {/* LOS WORKSPACES Y MODAL ---> VER LO DE LA RUTA */}
        <Route path="/locations/:locationsId/workspaces" element={workspaces ? <Workspaces workspaces={workspaces}  onClick={handleCreateReservationClick}/> : <>AQUI HAY WORKSPACES </>} />
        
        {/* AHORA CON MODAL COMO UTILIZO ESTA Ruta */}
        <Route path="/workspaces/:workspaceId/reservations" element= { <NewReservation/> } />
         
        {/* TODAS LAS RESERVAS --> quizás llevar a otra página */}
         <Route path="/workspaces/reservations" element={<Colors />} /> 

        
        
        <Route path="settings" element={<Settings />} />
        <Route path="Info" element={<PhotoGaleria />} />
        <Route path="solutions" element={<Colors />} />
      </Routes>
    </div>
  );
}
export default withContext(Home);