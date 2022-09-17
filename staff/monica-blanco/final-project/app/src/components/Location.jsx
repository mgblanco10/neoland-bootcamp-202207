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
    <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg justify-items-center space-x-4">
      <img className="w-full" src={location.image} alt="Workspaces PobleNou" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{location.name}</div>
        <p className="text-gray-700 text-base">{location.address}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          PRECIO
        </span>
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          onClick={handleLinkClick}
        >
          Rent
        </span>
        <button
          onClick={() => {
            onClick(location.id);
          }}
        >
          jojojo
        </button>
      </div>
    </div>
  </>
  ));
}

export default Location;
