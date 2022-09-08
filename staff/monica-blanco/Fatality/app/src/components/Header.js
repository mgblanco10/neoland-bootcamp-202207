function Header(){
    return(
        <div className="">
        <nav className="flex justify-between items-center h16 bg-gray-100 text-blue-500 relative shadow-sm">
            Logo

            <div className="px-4 cursor-pointer md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

            </div>
            <div className="pr-8 hidden md:block">
            <button className='font-medium pr-4 text-base text-white h16 bg-blue-500 relative shadow-sm'> Search</button>
            <button className='font-medium pr-4 text-base text-white h16 bg-blue-500 relative shadow-sm'>Settings</button>
            <button className='font-medium pr-4 text-base text-whitw h16 bg-blue-500 relative shadow-sm'> Logout</button>
            </div>

   
        </nav>
        </div>
    )

}
export default Header


{/* heroicons */}