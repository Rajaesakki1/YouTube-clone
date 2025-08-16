import React from 'react'

function Navbar() {
  return (
    <>
    <div className=' navbar-container '>

    
    <div className='d-flex flex-column gap-2 '>
      
        <img className='m-3' style={{height:'20px',width:'100px'}}src='/assets/yyoutubeh.png'></img>
    <div><button className='btn btn-smoky'><i className="bi bi-house-door-fill"></i>  Home</button></div>
    <div><button className='btn'><i className="bi bi-play"></i>  Shorts</button></div>
    <div><button className='btn'><i className="bi bi-play-btn"></i>  Subcribtion</button></div>
    <hr></hr>
    <div><button className='btn'><i className="bi bi-person-square"></i>   You</button></div>
    <div><button className='btn'><i className="bi bi-clock-history"></i>   History</button></div>
    <hr/>
    <div>
        <div>Sign in to like videos, comment, and subscribe.</div>
        <button className='btn bg-dark text-primary'>  Sing in</button>
    </div>
    <hr/>
    <div><b>Explore</b></div>
    <div><button className='btn'><i className="bi bi-bag"></i>  shopping</button></div>
    <div><button className='btn'><i className="bi bi-music-note-beamed">  Music</i></button></div>
    <div><button className='btn'><i className="bi bi-film"></i>  Movies</button></div>
    <div><button className='btn'><i className="bi bi-controller"></i>  Gaming</button></div>
    <div><button className='btn'><i className="bi bi-newspaper"></i>  News</button></div>
    <div><button className='btn'><i className="bi bi-trophy-fill"></i>  Sports</button></div>
   <div><button className='btn'><i className="bi bi-mortarboard"></i>  Course</button></div>
   <div><button className='btn'><i className="bi bi-person-standing-dress"></i>  Fashion&Beauty</button></div>
   <div><button className='btn'><i className="bi bi-broadcast-pin"></i>  Podcasts</button></div>
   <hr></hr>
   <div><b>More from youtube</b></div>

   <div><button className='btn'><img className='btn' style={{height:'30px',width:'57px'}}src='/assets/youtube1.png'/>YouTube Premium</button></div>
    <div><button className='btn'><img className='btn'  style={{height:'30px',width:'57px'}}src='/assets/youtube-music-icon.png'/>YouTube Music</button></div>
   <div><button className='btn'><img className='btn' style={{height:'45px',width:'57px'}}src='/assets/ytkids.png'/>YouTube Kids</button></div>
   </div>
   <hr/>
    <div><button className='btn'><i className="bi bi-gear"></i>  settings</button></div>
    <div><button className='btn'><i className="bi bi-flag"></i>  Report history</button></div>
    <div><button className='btn'><i className="bi bi-question-circle"></i>  help</button></div>
    <div><button className='btn'><i className="bi bi-postcard-heart"></i>  Send feedback</button></div>
    <hr/>
   <div>
    <div><small>About Press Copyright Contact </small></div> 
   <div><small>us Creators Advertise</small></div> 
<div><small>Developers</small></div>
<div><small>Terms Privacy Policy & Safety</small></div>
<div><small>How YouTube works</small></div>
<div><small>Test new features</small></div>
<div><small>© 2025 Google LLC</small></div>

   </div>
   </div>

    </>
  )
}

export default Navbar