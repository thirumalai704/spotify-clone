import React from 'react'
import Navbar from './Navbar'
import AlbumItems from './AlbumItems'
import { albumsData ,songsData} from '../assets/assets'
import SongItems from './SongItems'
function DisplayHome() {
  return (
    <div className=''>
        <Navbar/>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Your Top Playlists</h1>
          
           <div className='flex overflow-auto scroll-smooth scrollbar-hide '>
            {
            albumsData.map((items ,index)=>(<AlbumItems key={index} name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image} />)
          )}
           </div>
          </div>
         {/* songs data  */}
          <div className='mt-4'>
            <h1 className='my-5 font-bold text-2xl '>Your Top playlists</h1>
             <div className='flex overflow-auto scrollbar-hide'>
              {
                songsData.map((item,index)=>(
                  <SongItems key={index}
                  name={item.name}
                  image={item.image}
                  desc={item.desc}
                  id={item.id}
                  />
                ))
              }

             </div>
          </div>
        
    </div>
  )
}

export default DisplayHome