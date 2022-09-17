import { useNavigate } from "react-router-dom";
import Loggito from "../utils/Loggito";

function Location({ locations, onClick }) {
  const logger = new Loggito("List buildings");
  logger.info("return");

  const handleLinkClick = (event) => {
    event.preventDefault();

    onClick();
  };
  

  return locations.map((location) => (
<>
    <div className="py-10 max-w-sm mx-auto rounded overflow-hidden shadow-lg justify-items-center flex-row float-left">
      <img className="w-full h-56" src={location.image} alt="Workspaces PobleNou" />
      <div className="px-5 py-3">
        <div className="font-bold text-xl mb-2">{location.name}</div>
        <p className="text-gray-700 text-base">{location.address}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
          onClick={() => {
            onClick(location.id);
          }}
        >
          Rent
        </span>
      </div>
    </div>
  </>
  ));
}

export default Location;
