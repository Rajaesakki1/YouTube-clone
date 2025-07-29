import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Videos from '../videos/Videos'
function Home() {
    
  return (
    <>
  <div className="vh-100 p-3 bg-light container">
  <div className="row mb-3">
    <div className="col-6">
      <Searchbar />
    </div>
  </div>
  <div><Videos /></div>
</div>



   
    </>
  )
}

export default Home