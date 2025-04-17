import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display.jsx'
import {PlayerContext} from '../context/PlayerContext.jsx'

function Home() {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='h-screen  bg-black'>
      <div className='flex h-[90%]'>
         <Sidebar/>
         <Display />
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Home