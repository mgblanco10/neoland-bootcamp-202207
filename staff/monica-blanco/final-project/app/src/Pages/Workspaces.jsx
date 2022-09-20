import Loggito from "../utils/Loggito";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import createReservation from "../logic/createReservation";

function Workspaces({ workspaces, onClick }) {
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

  //const [workspaces, setWorkspaces] = useState();
  const params = useParams();

  logger.info("return");

  const locationId = params.locationId;
  const workspaceId = params.WorkspaceId;

  const handleFormSubmitReservation = (event) => {
    event.preventDefault();
    const {
      target: form,
      target: {
        workspace: { value: workspaceId },
        date: { value: date },
      },
    } = event;

    try {
      createReservation(sessionStorage.token, workspaceId, date, (error) => {
        if (error) {
          logger.warn(error.message);
          return;
        }
        form.reset();
      });
    } catch (error) {
      logger.warn(error.message);
    }
  };

  logger.info("return");

  return (
    <div>
      {workspaces &&
        workspaces.map((workspace) => {
          return (
            <div className="max-w-sm rounded px-4 pr-4 p-6 overflow-hidden flex-row float-left">
              <a
                href=""
                className="c-card block bg-white rounded-lg overflow-hidden"
              >
                <div className="relative pb-2 overflow-hidden rounded-lg">
                  <img
                    className="w-full  h-56"
                    src={workspace.image}
                    alt="Workspaces"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mt-2 mb-2  font-bold"> {workspace.name}</h2>
                  <p className="text-gray-700 text-base">{workspace.address}</p>
                  <p className="text-sm">{workspace.description}</p>
                  <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">
                      {workspace.price}€
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                  <span className="flex items-center mb-1">
                    <form metod="get" onSubmit={handleFormSubmitReservation}>
                      <input className="calendar" name="date"
                        type="date" min={anio + "-" + mes + "-" + dia}/>{" "}
                      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        type="submit"
                        onClick={() => {
                          onClick(workspace.id);
                        }}
                      >
                        Rent
                      </button>
                    </form>
                  </span>
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
}
export default Workspaces;

// return (
//   <div>
//     {workspaces &&
//       workspaces.map((workspace) => {
//         return (
//           <div className="max-w-sm rounded px-6 pr-5 p-6 overflow-hidden shadow-lg flex-row float-left">
//             <img
//               className="w-full  h-56"
//               src={workspace.image}
//               alt="Workspaces PobleNou"
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2">{workspace.name}</div>
//               <p className="text-gray-700 text-base">{workspace.address}</p>
//             </div>
//             <div className="px-6 pt-4 pb-2">
//               <p>45€</p>
//               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                 Rent
//               </span>
//               <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

//                 <form metod="get" onSubmit={handleFormSubmitReservation}>

//                   <input className="calendar" type="date"  min={anio + "-" + mes + "-" + dia} />{" "}

//                   <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"  type="submit">
//                 Rent
//               </button>

//                 </form>
//               </span>
//             </div>
//           </div>
//         );
//       })}
//   </div>
// );
// }