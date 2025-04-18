import React from 'react'
import {assets} from '../assets/assets'
function Sidebar() {
  return (
    <div className='w-[25%] text-white hidden  h-full  p-2 lg:flex flex-col gap-2 '>
       
     {/* home and search */}

     <div className=' h-[15%] bg-[#111111] py-3 text-white  flex gap-5 flex-col justify-around rounded '>
            <div className='flex items-center font-bold  cursor-pointer pl-8 gap-3 '>
            <img className='w-5' src={assets.home_icon} alt="home" />
            <h1>Home</h1>
             </div>            
             <div className='flex items-center font-bold  cursor-pointer pl-8 gap-3'>
             <img  className='w-5'src={assets.search_icon} alt="" />
             <h1>Search</h1>
            </div>   
         </div>
       <div className='w-[25% h-[85%]  bg-[#111111] rounded'>
 {/* your library */}
        <div className='flex justify-between p-4'>

            <div className='flex gap-2 font-semibold '>
                <img className='w-6 ' src={assets.stack_icon} alt="" />
                <h2>Your Library</h2>
            </div>
            <div className='flex gap-2'>
                <img className='w-5' src={assets.arrow_icon} alt="" />
                <img className='w-5' src={assets.plus_icon} alt="" />
            </div>

        </div>
        {/* create playlist */}

        <div className='flex flex-col py-3 items-start justify-start gap-3 pl-4  bg-[#242424]'>
            <h6 className='font-semibold'>Create your first playlist</h6>
            <p className='font-light'>it's easy we will help you</p>
            <button className='bg-white font-semibold py-1 text-black rounded-full px-2 '>Create playlist</button>
        </div>
        <div className='flex flex-col py-3 items-start mt-2 justify-start gap-3 pl-4 bg-[#242424]'>
            <h6 className='font-semibold'>Find some Podcosts to Folllow</h6>
            <p className='font-light'>We'll help yop update on new episodes </p>
            <button className='bg-white font-semibold py-1 text-black rounded-full px-2 '>Browse Podcosts</button>
        </div>

            
         
       </div>
         
         
       
    </div>
  )
}

export default Sidebar