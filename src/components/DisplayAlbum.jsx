import React, { useContext } from "react";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
function DisplayAlbum() {
  const { id } = useParams();
  const albumDataLocal = albumsData[id];
  const {playWithId} = useContext(PlayerContext)
  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="max-w-[150px]" src={albumDataLocal.image} alt="" />
        <div>
          <p>Playlist</p>
          <h1 className="text-2xl font-bold ">{albumDataLocal.name}</h1>
          <h4>{albumDataLocal.desc}</h4>
          <div className="mt-2 flex gap-2">
            <img
              className=" md:w-4 inline-block "
              src={assets.spotify_logo}
              alt=""
            />
            <p>
              <b>Spotify clone </b>
                33,21,444 likes | 
              <b> 50 Songs</b> | about 2hr 35 min
            </p>
          </div>
        </div>
      </div>


{/* list  */}

<div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 mb-2 text-[#a7a7a7]   ">
       <p><b className="mr-4">#</b>Title</p>
       <p>Album</p>
       <p className="hidden md:block">Data Addded</p>
       <img className="m-auto w-4" src={assets.clock_icon} alt="" />


</div>
<hr />
{
    songsData.map((item,index)=> (
        <div onClick={()=>playWithId(item.id)}  key={index} className="grid grid-cols-3 p-2 sm:grid-cols-4 gap-3 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
            <p className="text-white">
                <b>{index+1}</b>  
                <img className="w-10 inline-block ml-4" src={item.image} alt="" />
            </p>
            <p className="text-[15px]">{albumDataLocal.name}</p>
            <p className="text-[15px]">3 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
        </div>
    ))
}

    </div>
  );
}

export default DisplayAlbum;
