import React from 'react'
import location from "./image/location.png"
import "./chooseSpotLocation.css"


const ChooseSpotLocation = () => {
  return (
    <div className='main1' >
    <div className='text'> Add New Flying Spot</div>
    <div className='container'>
        <div className='heading'>Choose Spot Location</div>
    <div className='form'>
   
 <div className='p'>Locations</div>
 <div className='image'><img src={location}></img></div>
 <div className='stack'>
    <div className='bits'>BITS PILANI</div>
    <div className='change'>change</div>
 </div>
 <div className='stack'>
  <div className='p'>Add more locations</div>
 </div>

    </div>

<div className='continue'> Continue</div>
<div className='stack'>
    <div className='cancel'>cancel</div>
    <div className='save'>Next</div>
</div>
  </div>
  </div>
  )
}

export default ChooseSpotLocation