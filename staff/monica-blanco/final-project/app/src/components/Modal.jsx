import React from 'react'


function Modal({children, estado, cambiarEstado}) {
    return (
    <>{ estado&&
       <div className="flex h-32 w-52 p-4 text-sm text-gray-500 bg-cyan-100 rounded-lg" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-7 h-7 mr-3 rounded-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div className="bg-cyan-100" >
    <span className="font-medium bg-cyan-100 w-80">Reservation</span>
      <ul className="text-blue-600 list-disc list-inside">
      <ul className='bg-cyan-100 text-gray-500'> 2023/04/03</ul>
      <ul className='bg-cyan-100 text-gray-500'> Name Workspace</ul>
        {children}
    </ul>
    <button className="text-gray underline decoration-sky-600 hover:decoration-blue-400" onClick={()=> cambiarEstado(false)}>Close</button>
  </div>
</div>}
    </>
    );
  }
  
  export default Modal



