import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Videos from '../videos/Videos'
function Home() {
    
  return (
    <>
 
    <div className="vh-100 p-3 bg-light container d-flex flex-column " style={{overflow:'hidden'}}>
     
      <div style={{ height: '20%',width:'80% '}}>
        <Searchbar />
      </div>
      <div style={{ height: '80%', overflowY:'hidden'}}>
        <Videos />
      </div>
    </div>
  </>
);
}

export default Home