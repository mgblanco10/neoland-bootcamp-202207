

import { Alert } from "@material-tailwind/react";
 
export default function Colors() {
  return (

    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    <div class="relative pb-48 overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
    </div>
    <div class="p-4">
      <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
      <h2 class="mt-2 mb-2  font-bold">Nombre de la oficcina</h2>
      <p class="text-sm">Descripcion</p>
      <div class="mt-3 flex items-center">
        <span class="text-sm font-semibold">PRECIO €</span>
      </div>
    </div>
    <div class="p-4 border-t border-b text-xs text-gray-700">
      <span class="flex items-center mb-1">
        <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> CALENDARIO
      </span>
          
    </div>
  </a>
  </div>  

  

  )
}
    // <div className="flex w-full flex-col gap-2">
    //   <Alert color="blue">An info alert for showing message.</Alert>
    //   <Alert color="red">An error alert for showing message.</Alert>
    //   <Alert color="green">A success alert for showing message.</Alert>
    //   <Alert color="amber">A warning alert for showing message.</Alert>
    // </div>