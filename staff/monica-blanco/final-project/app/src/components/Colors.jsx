import retrieveAllReservations from "../logic/retrieveAllReservations";
import Loggito from "../utils/Loggito";
import { useEffect, useState } from "react";
// import retrieveWorkspaces from "../../../api/src/logic/workspaces/retrieveWorkspaces";
// import { workspace } from "../../../api/src/models/schemas";

export default function Colors({ workspaces }) {
  const logger = new Loggito("allReservations");

  const [reservations, setReservations] = useState([]);
  const [workspacesIds, setWorkspacesIds] = useState([])
  const [workspacesWithRes, setWorkspacesWithRes] = useState([]);
  const [workspacesWithResComplete, setWorkspacesWithResComplete] = useState(
    []
  );


  useEffect(() => {
    loadReservations();
  }, []);

  // useEffect(() => {
  //   const workspacesWithReservationsComplete = [];

  //   if (workspaces) {
  //     for (let i = 0; i < workspacesWithRes.length; i++) {
  //     const newArray = workspaces.filter((["id", workspacesWithRes[i]]))
  //     workspacesWithReservationsComplete[workspacesWithReservationsComplete.length] = newArray[0]
  //     }
  //     setWorkspacesWithResComplete(workspacesWithReservationsComplete)
  //     console.log(workspacesWithReservationsComplete)
  // }}, [workspacesWithRes])

  const loadReservations = () => {
    try {
      retrieveAllReservations(
        sessionStorage.token,
        (error, reservationsFromApi) => {
          debugger;
          if (error) {
            logger.warn(error.message);

            return;
          }

          const groupBy = (items, key, key2) =>
            items.reduce(
              (result, item) => ({
                ...result,
                [item[key][key2]]: [...(result[item[key][key2]] || []), item],
              }),
              {}
            );

            const groupedReservations = groupBy(reservationsFromApi, 'workspace', '_id')

              console.log(groupedReservations)

              setReservations(groupedReservations)

              setWorkspacesIds(Object.keys(groupedReservations))

          // setReservations(reservations);

          // logger.debug("setReservations", reservations);

          // const workspacesWithReservations = [];

          // if (reservations) {
          //   workspacesWithReservations[0] = reservations[0].workspace;
          //   for (let i = 1; i < reservations.length; i++) {
          //     const element = reservations[i].workspace;
          //     if (reservations.includes(element) === false)
          //       workspacesWithReservations[workspacesWithReservations.length] =
          //         reservations[i].workspace;
          //   }

          //   setWorkspacesWithRes(workspacesWithReservations);
          // }

          // console.log(workspacesWithReservations);
        }
      );
    } catch (error) {
      logger.warn(error.message);
    }
  };

  logger.info("return");
  return (
    <div>
      {workspacesIds.map(workspaceId => {
        return <div>
            <h2>{reservations[workspaceId][0].workspace.name}</h2>
            <img src={reservations[workspaceId][0].workspace.image} className="py-10 8px h-60 w-58 pr-5 p-6 md:break-inside-avoid-column rounded  justify-items-center float-left"/>

            <h3>Reservations of this workspace</h3>
            {reservations[workspaceId].map(reservation => {
        return (
          <div>
            <p>Date:</p>
            <p className="p-4 border-t border-b text-xs text-gray-700">
              {reservation.date}
            </p>
          </div>
        )
      })}

      </div>})}
      </div>
  )

}

{/* {reservations.map((reservation) => {
  return (
    <div>
      <p>Date:</p>
      <p className="p-4 border-t border-b text-xs text-gray-700">
        {reservation.date}
      </p>
      <p>Workspace:</p>
      <p className="p-4 border-t border-b text-xs text-gray-700">
        {reservation.workspace}
      </p>
    </div>
  );
})} */}

{/* <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
<a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
<div class="relative pb-48 overflow-hidden">
<img class="absolute inset-0 h-full w-full object-cover" src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/talent-garden-campus-barcelona-04-1280x800.jpg" alt=""/>
</div>
<div class="p-4">
<h2 class="mt-2 mb-2  font-bold">Information Last Reservations</h2>
<p class="text-sm">Office used</p>
<div class="mt-3 flex items-center">
  <span class="text-sm font-semibold"> Reservations Date</span>
</div>
</div>
<div class="p-4 border-t border-b text-xs text-gray-700">
<span class="flex items-center mb-1">
  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 
</span>
    
</div>
</a>
</div>  */}
// </div>