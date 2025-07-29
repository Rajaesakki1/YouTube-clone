import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Videos from '../videos/Videos'
function Home() {
    
  return (
    <>
   <div className='vh-100 p-3 bg-light'>
  <div className='mb-3'><Searchbar /></div>
  <div><Videos /></div>
</div>

   
    </>
  )
}

export default Home