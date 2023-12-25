import React from 'react'
import drone1 from "./image/drone.jpeg"
import drone2 from "./image/drone.png"
import "./App.css"

const App = () => {
  return (
    <div className='ok'>
   <div className='flex'>

    <div className='text'>Discover and Soar:Flying Spots Navigator</div>
    <div className='p'>explore a curated map of drone friendly-locations , find real time real updates on spot status and contribute to our growing community of aviators</div>
    <div className='stack'>
      <input placeholder='search a spot near your location'></input>
      <button className='butn'>Add a New Spot</button>
      </div>
   
   </div>

<div className='image'>
<img  src={drone2}></img>
</div>
<div className='object'>
<div className='text'>Recently Added</div>
<div className='stack'>
<div className='card'>
<div className='image'><img src={drone1}></img></div>
<div className='icon'>
 
 

</div>
<div className='heading'>Delhi Dunes</div>
<div className='stack'>
  <div className='p'>Delhi</div>
  <div className='minaway'>35 Mins Away</div>
</div>
<div className='stack'>
  <button className='follow'>follow</button>
</div>
<div className='stack'>
  <button className='addyour' >Add Your Experience</button>
</div>




</div>

  </div>

</div>
   </div>
  )
}

export default App