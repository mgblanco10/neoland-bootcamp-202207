
import Loggito from "../utils/Loggito";

function Edifice({buildings}) {
  const logger = new Loggito("List buildings");

  logger.info("return")


  return (
    buildings.map(building => <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={building.image} alt="Workspaces PobleNou" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{building.name}</div>
      <p className="text-gray-700 text-base">
      {building.address}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        PRECIO
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        ALQUILAR
      </span>
    </div>
  </div>)
  );
}

export default Edifice;
