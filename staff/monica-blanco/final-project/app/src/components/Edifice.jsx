
import Loggito from "../utils/Loggito";

function Edifice({buildings}) {
  const logger = new Loggito("List buildings");

  logger.info("return");

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={buildings[0].image} alt="Workspaces PobleNou" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{buildings[0].name}</div>
        <p class="text-gray-700 text-base">
        {buildings[0].address}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          PRECIO
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ALQUILAR
        </span>
      </div>
    </div>
  );
}

export default Edifice;
