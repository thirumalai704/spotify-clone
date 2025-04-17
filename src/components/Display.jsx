import React, { useEffect, useRef } from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

function Display() {
  const displayRef = useRef()
  const loc = useLocation();
  const isAlbum =  loc.pathname.includes("album")
  const albumId =isAlbum?loc.pathname.slice(-1):""
  const bgClr = albumsData[Number(albumId)].bgColor;

useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgClr},#121212)`;
        
    }
    else{
      displayRef.current.style.background = "#121212";
    }

  
})


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
     <Routes>
        <Route path="/" element={<DisplayHome/>} />
        <Route path="/album/:id" element={<DisplayAlbum/>} />
     </Routes>
    </div>
  )
}

export default Display