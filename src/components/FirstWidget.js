import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import About from './About';

const FirstWidget = () => {
    const navigate=useNavigate();
    const location=useLocation();
    
    
  return (
    <div className='h-[45%]  bg-[#363C43] py-4 rounded-2xl shadow-xl '>
      <div className='flex justify-between w-[90%] bg-black p-2 m-auto rounded-2xl shadow-2xl '> 
        <button className='sm:px-1 md:px-3  hover:bg-gray-600 py-1 rounded-xl ' onClick={()=>navigate("about")}>About Me</button>
        <button className='sm:px-1 md:px-3 hover:bg-gray-600 py-1 rounded-xl' onClick={()=>navigate("experience")}>Experience</button>
        <button className='sm:px-1 md:px-3 hover:bg-gray-600 py-1 rounded-xl' onClick={()=>navigate("recommend")}>Recommended</button>
      </div>
      <div className='w-[90%] m-auto pt-4 h-[80%] overflow-auto no-scrollbar'>
        {location.pathname !== "/" ? <Outlet/> : <About/>}
      </div>
    </div>
  )
}

export default FirstWidget;
