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
import Footer from "../components/Footer";
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

  function handleSettingsClick() {
    navigate("settings");

    logger.debug("navigate to settings");
  }

  function handleInfoClick() {
    navigate("info");

    logger.debug("navigate to info");
  }

  function handleSolutionsClick() {
    navigate("solutions");

    logger.debug("navigate to your reservations");
  }

  function handleNavigationToHomeClick () {
    navigate('/')

    logger.debug('navigate to home')

}

  const handleLocationClick = (locationId) => {
    
    loadWorkspaces(locationId);
    
    navigate(`locations/${locationId}/workspaces`);
  };

  const handleAllReservationClick =(reservationId)=>{
    loadReservations(reservationId)

    logger.debug('navigate to reservations')
    navigate('/workspaces/reservations')
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

        <Route path="/" element={locations ? ( <Location locations={locations} onClick={handleLocationClick} />) : ( <> BUILDINGS </> ) }/>
        <Route path="/locations/:locationsId/workspaces" element={workspaces ? <Workspaces workspaces={workspaces} /> : <> WORKSPACES </>} />
        <Route path="/workspaces/:workspaceId/reservations" element= { <NewReservation/> } />
         <Route path="/workspaces/reservations" element={ <Colors reservations={reservations} workspaces={workspaces} locations={locations} onClick={handleAllReservationClick} /> } />         
        <Route path="settings" element={<Settings />} />
        <Route path="Info" element={<PhotoGaleria />} />
        <Route path="solutions" element={<Colors />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default withContext(Home);