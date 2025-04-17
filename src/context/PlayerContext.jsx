import { createContext, useEffect, useState } from "react";
import { useRef  } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();

const PlayerContextProvider =(props)=>{
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
const [track, setTrack] = useState(songsData[0]);
const [playStatus, setPlayStatus] = useState(false);
const [time, setTime] = useState({
  currentTime :{
    second : " --",
    minute : '--',
  },
  totalTime:{
    second: ' --',
    minute :'--',

  } 
})

useEffect(() => {
  setTimeout(()=>{
    audioRef.current.ontimeupdate = ()=>{
      seekBar.current.style.width = ((audioRef.current.currentTime  /audioRef.current.duration)*100) + "%"
      setTime(
        {
          currentTime:{
            second:Math.floor(audioRef.current.currentTime % 60),
            minute:Math.floor(audioRef.current.currentTime / 60)
          },
          totalTime:{
            second:Math.floor(audioRef.current.duration % 60),
            minute:Math.floor(audioRef.current.duration / 60)
          }  
        }
      )
    }
  })


}, [audioRef])


const play = ()=>{
  audioRef.current.play();
  setPlayStatus(true);
}
const pause = ()=>{
  audioRef.current.pause();
  setPlayStatus(false);
}
const playWithId = async(id)=>{
  await setTrack(songsData[id])
  await audioRef.current.play();
  setPlayStatus(true)

}
  const contextvalue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    playStatus,
    time,
   setTrack,
   setPlayStatus,
   setTime,
   play,
   pause,
   playWithId
  }
  return (
    <PlayerContext.Provider value={contextvalue}>
       {props.children}
    </PlayerContext.Provider>
  )
}
export default PlayerContextProvider;