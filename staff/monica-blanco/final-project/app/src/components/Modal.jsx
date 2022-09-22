import React from 'react'
import { useParams } from "react-router-dom";

function Modal({children, reservationOrError, onClose, workspaces}) {
  debugger
    return (
    <>
    <div className='h-40 w-60 bg-cyan-100 rounded-lg'>
       <div className="flex h-38 w-58 text-sm text-gray-500 bg-cyan-100 rounded-lg" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-7 h-7 mr-3 rounded-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div className="bg-cyan-100 h-32 w-50" >
    <span className="text-lg w-7 h-7 mr-3  bg-cyan-100 w-80">Reservation</span>
      <ul className="text-blue-600 list-disc list-inside">
      
    </ul>
      {(reservationOrError && reservationOrError.date) &&
      <>
      <p className='font-medium bg-cyan-100 text-gray-500'>Date:</p>
      <p className='bg-cyan-100 text-sm text-gray-500'>{reservationOrError.date}</p>
      <p className='font-medium bg-cyan-100 text-gray-500'>Workspace Name: </p>
      <p className='bg-cyan-100 text-sm text-gray-500'>{reservationOrError.workspace.name}</p>
      </>}

    {reservationOrError && reservationOrError.errorMessage && <p className='bg-cyan-100 text-gray-500'>There was an error: {reservationOrError.errorMessage}</p>}
    <button className="ease-in duration-300 text-lg" onClick={()=> onClose()}>Close</button>
    
  </div>
</div>
</div>
    </>
    );
  }
  
  export default Modal



