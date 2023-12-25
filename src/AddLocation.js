import React from 'react'
import  "./AddLocation.css"
import drone from "./image/drone.png"
const AddLocation = () => {
  return (
  <div className='main1' >
    <div className='text'>Add New Flying Spot  </div>
    <div className='form'>
        <div className='heading'>Choose Spot Location</div>
        <div className='container'>
   <div className='text'>choose location Address</div>
   <div className='input'>
   <div className='label'>Address</div>
    <input placeholder='Add Address'></input>
   </div>
   <div className='stack'>
   <div className='input'>
  <div className='label'>City</div>
    <input placeholder='select city'></input>
   </div>
   <div className='input'>
   <div className='label'>State/Province</div>
    <input placeholder='select province'></input>
   </div>
   </div>
   <div className='stack'>
   <div className='input'>
   <div className='label'>Zip/Postal code</div>
    <input></input>
   </div>
   <div className='input'>
   <div className='label'>Country/Region</div>
    <input placeholder='Select country/region'></input>
   </div>
   </div>

<div className='Image'><img src={drone}></img></div>
<button className='save'>Save</button>

        </div>

    </div>

  </div>
  )
}

export default AddLocation