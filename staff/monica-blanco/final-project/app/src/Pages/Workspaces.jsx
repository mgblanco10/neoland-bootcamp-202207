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
  let _mes = fecha.getMonth(); 
  _mes = _mes + 1; 
  if (_mes < 10) {
    mes = "0" + _mes;
  } else {
    mes = _mes.toString;
  }

  const logger = new Loggito("workspaces");

  // const [workspaces, setWorkspaces] = useState();
  const params = useParams();

  logger.info("return");

  const locationId = params.locationId;


  const handleLinkClick = (event) => {
    event.preventDefault();

    onLinkClick();
  };


  logger.info("return");

  return (
    <div>
      {workspaces &&
        workspaces.map((workspace) => {
          debugger;
          return (
            <div className="max-w-sm rounded px-6 pr-5 p-6 overflow-hidden shadow-lg flex-row float-left">
              <img
                className="w-full  h-56"
                src={workspace.image}
                alt="Workspaces PobleNou"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{workspace.name}</div>
                <p className="text-gray-700 text-base">{workspace.address}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p>45€</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Rent
                </span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onLinkClick={handleLinkClick}>
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
