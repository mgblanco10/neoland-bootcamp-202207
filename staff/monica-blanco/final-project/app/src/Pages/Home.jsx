import { useState, useEffect } from "react";
import Header from "../components/Header";
import Settings from "../Pages/Settings";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import retrieveLocations from "../logic/retrieveLocations";
import retrieveWorkspaces from "../logic/retrieveWorkspaces";
import withContext from "../utils/withContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import PhotoGaleria from "../components/PhotoGaleria";
import Location from "../components/Location";
import Card from "../components/Card";
import Colors from "../components/Colors";
import Workspaces from "./Workspaces";

function Home({ onLogoutClick, context: { toggleTheme } }) {
  const logger = new Loggito("Home");

  const [locations, setLocations] = useState();
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
    debugger
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

  function handleSettingsClick() {
    navigate("settings");

    logger.debug("navigate to settings");
  }

  // function handleWorkspacesClick() {
  //   navigate("workspaces");

  //   logger.debug("navigate to workspaces");

  //   loadWorkspaces();
  // }

  function handleYourReservationsClick() {
    navigate("yourReservations");

    logger.debug("navigate to your reservations");
  }
  function handleSolutionsClick() {
    navigate("solutions");

    logger.debug("navigate to your reservations");
  }
  const handleLocationClick = (locationId) => {
    debugger
    loadWorkspaces(locationId);
    
    navigate(`locations/${locationId}/workspaces`);
  };

  return (
    <div>
      <Header
        onLogoutClick={onLogoutClick}
        onSettingsClick={handleSettingsClick}
        // onWorkspacesClick={handleWorkspacesClick}
        onYourReservationsClick={handleYourReservationsClick}
        onSolutionsClick={handleSolutionsClick}
      />
      <Routes>
        <Route
          path="/"
          element={
            locations ? (
              <Location locations={locations} onClick={handleLocationClick} />
            ) : (
              <>hola</>
            )
          }
        />
        <Route
          path="/locations/:locationsId/workspaces"
          element={workspaces ? <Workspaces workspaces={workspaces} /> : <>AQUI HAY WORKSPACES </>}
        />
        <Route path="settings" element={<Settings />} />
        <Route path="yourReservations" element={<PhotoGaleria />} />
        <Route path="solutions" element={<Colors />} />
      </Routes>
    </div>
  );
}
export default withContext(Home);
