import React from 'react'
import FirstWidget from './FirstWidget';
import SecondWidget from './SecondWidget';

const Home = () => {
  return (
    <div className='min-h-screen  bg-[#262B30] flex justify-end text-white p-2'>
        
        <div className='w-[50%] flex flex-col p-4 justify-center gap-2 '>
            <FirstWidget/>
            <div className='border-2 border-gray-600 w-[70%] mx-auto'></div>
            <SecondWidget/>
            <div className='border-2 border-gray-600 w-[70%] mx-auto'></div>
        </div>
        
      
    </div>
  )
}

export default Home;
