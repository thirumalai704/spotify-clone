import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const nav = useNavigate();
  return (
    <div>
      <div className='w-full flex justify-between items-center font-semibold py-2'>
        {/* preview */}
       
        <div className='flex items-center gap-2'>
           <img onClick={()=>nav(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
           <img onClick={()=>nav(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
       </div>
       <div className='flex items-center gap-4' >
           <p className='bg-white cursor-pointer text-black rounded-full px-2'>Explore Premium</p>
           <p className='cursor-pointer bg-black rounded-full px-2'>Install App</p>
           
           <div className='rounded-full px-2 aspect-square cursor-pointer   bg-amber-500'>
           <p className='text-black '>T</p>
           </div>

       </div>
        
       </div>
        
        <div className='flex gap-4 mt-2'>
         <p className='bg-white cursor-pointer text-black rounded-full px-3'>All</p>
         <p className='cursor-pointer'>Music</p>
         <p className='cursor-pointer'>Podcasts</p>
        </div>
       
        </div>
  )
}

export default Navbar