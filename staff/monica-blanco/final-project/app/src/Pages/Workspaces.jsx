import Loggito from "../utils/Loggito";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import retrieveWorkspaces from "../logic/retrieveWorkspaces";

function Workspaces({ workspaces, onLinkClick }) {
  let fecha = new Date();
  let mes;
  let anio = fecha.getFullYear();
  let dia = fecha.getDate();
  let _mes = fecha.getMonth(); //viene con valores de 0 al 11
  _mes = _mes + 1; //ahora lo tienes de 1 al 12
  if (_mes < 10) {
    //ahora le agregas un 0 para el formato date
    mes = "0" + _mes;
  } else {
    mes = _mes.toString;
  }

  const logger = new Loggito("workspaces");

  // const [workspaces, setWorkspaces] = useState();
  const params = useParams();

  logger.info("return");

  const locationId = params.locationId;

  // useEffect(() => {
  //   logger.info('workspaces the building')

  //   try {

  //     retrieveWorkspaces( (error, workspaces) => {
  //       if (error) {
  //           logger.warn(error.message)

  //           return
  //         }

  //         setWorkspaces(workspaces)

  //         logger.debug('setWorkspaces', workspaces)

  //                 })
  //               } catch (error) {

  //                   logger.warn(error.message)
  //               }

  //               loadWorkspaces()

  //           }, [])

  const handleLinkClick = (event) => {
    event.preventDefault();

    onLinkClick();
  };

  // const loadWorkspaces = () => {
  //   debugger
  //   try {
  //     retrieveWorkspaces(locationId, (error, workspaces) => {
  //       if (error) {
  //         logger.warn(error.message);

  //         return;
  //       }
  //       setWorkspaces(workspaces);

  //       logger.debug("setWorkspaces", workspaces);
  //     });
  //   } catch (error) {
  //     logger.warn(error.message);
  //   }
  // };

  logger.info("return");

  return (
    <div>
      {workspaces &&
        workspaces.map((workspace) => {
          debugger;
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={workspace.image}
                alt="Workspaces PobleNou"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{workspace.name}</div>
                <p className="text-gray-700 text-base">{workspace.address}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  PRECIO
                </span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onLinkClick={handleLinkClick}
                >
                  <form>
                    <input
                      className="calendar"
                      type="date"
                      min={anio + "-" + mes + "-" + dia}
                    />{" "}
                  </form>
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Workspaces;
