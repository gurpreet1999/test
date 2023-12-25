import React from 'react'
import "./NextApp.css"
import drone from "./image/drone.png"
import star from "./image/star.png"

const NextApp = () => {
  return (
    <>
    <div className='main'>
        <div className='left'>
  <div className='text'>Single Spot Name</div>
  <div className='p'>Spot location | Total Views </div>
  <div className='text'>Followers:1222</div>
  <div className='text'>Snaps:1122 </div>
  <div className='follow'>follow</div>
  <div className='rate'>Rate this spot: <span><img src={star}></img></span></div>
        </div>
        <div className='right'>
          <img src={drone}>
        </img></div>
    </div>
    </>
  )
}

export default NextApp