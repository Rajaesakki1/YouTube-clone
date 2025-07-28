import React, { useEffect, useState } from 'react'

function Videos() {
    const[videos,setvideos] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/videos`)
        .then((data)=>data.json)
        .then((data)=>setvideos(data))
        .catch((err)=>console.log(err));
    },[]

    )

  return (
    <div>Videos</div>
  )
}

export default Videos