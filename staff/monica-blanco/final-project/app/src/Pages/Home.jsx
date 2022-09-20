import { useState, useEffect } from "react";
import Header from "../components/Header";
import Settings from "../Pages/Settings";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import retrieveLocations from "../logic/retrieveLocations";
import retrieveWorkspaces from "../logic/retrieveWorkspaces";
import retrieveReservation from "../logic/retrieveReservation";
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
  const loadReservation = (workspaceId) => {
    try {
      retrieveReservation(sessionStorage.token, workspaceId, (error, reservation) => {
        if (error) {
          logger.warn(error.message);

          return;
        }
        setReservation(reservation);

        logger.debug("setReservation", reservation);
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
        <Route path="/" element={locations ? ( <Location locations={locations} onClick={handleLocationClick} />) : ( <>hola</> ) }/>
        <Route path="/locations/:locationsId/workspaces" element={workspaces ? <Workspaces workspaces={workspaces}  onClick={handleCreateReservationClick}/> : <>AQUI HAY WORKSPACES </>} />
        <Route path="/workspaces/:workspaceId/reservations" element= {reservation ? <NewReservation/> : <> NO HAY RESERVAS  </>} />
         <Route path="/workspaces/reservations" element={<Colors />} />
        <Route path="settings" element={<Settings />} />
        <Route path="Info" element={<PhotoGaleria />} />
        <Route path="solutions" element={<Colors />} />
      </Routes>
    </div>
  );
}
export default withContext(Home);