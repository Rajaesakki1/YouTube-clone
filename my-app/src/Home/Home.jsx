import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Video from '../Video/Video'

function Home() {
    
  return (
    <>
   <div className='vh-100 p-3 bg-light'>
  <div className='mb-3'><Searchbar /></div>
  <div><Video /></div>
</div>

   
    </>
  )
}

export default Home