import Card from "./Card";
import Circle from "./Circle";

export default function PhotoGaleria() {
  
  return (
<div className="justify-items-center bg-contain bg-center">
 
    <div className="flex fex-row place-items-center max-w-lg mx-3 py-2">
    <div className="p-1 w-full mt-1 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 md:bg-gradient-to-r from-green-400 to-blue-500">
      <p className="mt-2 text-gray-600">Diseño primero para las dimensiones pequeñas y va aumentando para las grandes, el plan es aquí poner la info del Workspaces e info...</p>
      </div>
    <img className="p-3 bg-cover" src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2022/09/Workspace-Design-WeWork-167-North-Green-Reshoot-2-1440x810.jpg" alt="office"/>

    <div className="flex flex-row h-90">
    <div className=" p-16 w-60 h-65 px-3 bg-gray-200 bg-gray-100 md:bg-gradient-to-r from-green-400 to-blue-500">
    
      <p className="mt-3 text-gray-600">Esta caja es adaptable. Diseño primero para las dimensiones pequeñas y voy aumentando para las grandes.</p>
      </div>



     <div className="flex flex-row h-70">
        <div className="w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse m-9 p-8" />
      </div>

      </div>







    </div>
    <div className="flex justify-center mx-auto px-3">
    <div className="max-w-md p-1 mx-auto px-4 bg-gray-200 bg-gray-100 md:bg-gradient-to-r from-green-400 to-blue-500">
    <img className="p-3" src="https://www.dynamobel.com/wp-content/uploads/2022/03/SH_04-1920x1053.jpg" alt="office"/>
      <h2 className="text-lg font-semibold text-center text-blue-500 sm:text-xl">Me adapto a todo</h2>
      <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, voluptate sint fugit a voluptatem inventore maxime commodi necessitatibus repellendus dicta laboriosam numquam praesentium architecto ratione nisi sit perferendis odio amet..</p>
      </div>
      <div className="max-w-md p-1 mx-auto px-3 bg-gray-200 bg-gray-100 md:bg-gradient-to-r from-green-400 to-blue-500">
    <img className="p-3" src="https://www.domingoloro.com/images/portfolio/infograf%C3%ADa-3D-coworking-domingo-loro.jpg" alt="office"/>
      <h2 className="text-lg font-semibold text-center text-blue-500 sm:text-xl">Diagonal</h2>
      <p className="mt-3 text-gray-600"> Aquí las descripciones e info del lugar quizáz sesion de tablon de ofertas, promosiones,etc </p>
      </div>
      
    </div>
    </div>
  

    );
}







{/* <div className="container md:flex">
  <main className="px-4 mb-6" flex-grow>
    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sed quas non voluptates labore commodi eos neque dicta cupiditate, ipsam libero, beatae vel suscipit nihil nemo cumque magnam similique doloremque?</p>
    <p className="mb-4">Nesciunt magnam excepturi tenetur eum magni mollitia amet at neque. Minima placeat maiores laudantium quisquam molestiae corporis et possimus iusto suscipit illum?</p>
  </main>
  <aside className="px-4 md:flex-none md:w-64">
    <div className="px-4 py-2 mb-2 bg-red-300">Titulo de aside</div>
    <p>Este es el aside</p>
  </aside>
</div> */}








