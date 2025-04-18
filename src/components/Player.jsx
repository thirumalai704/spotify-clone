import React, { useContext } from 'react'
import {assets ,songsData} from '../assets/assets'
import {PlayerContext} from '../context/PlayerContext';

function Player() {
       const {seekBar,seekBg,play,pause,playStatus,track,time} = useContext(PlayerContext);
  return (
    <div className='h-[10%] text-white flex justify-between items-center px-4'>
     {/* first */}
        <div className='flex items-center gap-3'>
            <img className='w-12' src={track.image} alt="" />
            <div className='hidden md:inline-block'>
                <h4>{track.name}</h4>
                <h4>{track.desc.slice(0,16)+"..."}</h4>
            </div>
        </div>  
        
        {/* second */}
    
     <div className='flex flex-col '>
        <div className='flex gap-3 self-center'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            
            {
              playStatus ? (<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />) :

            <img onClick={play}  className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            }
            
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>

        <div className='flex items-center gap-2'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg}  className='w-[20vh] md:w-[60vh] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='bg-green-800 h-1 w-0 border-none rounded-full ' />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>  
     </div>
     {/* {third section} */}
     <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.play_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 bg-slate-400 h-1 rounded  '></div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
     </div>

            
    </div>
  )
}

export default Player