import React from 'react'
import "./AddLocationImage.css"
import drone from "./image/drone.jpeg"

const AddLocationImage = () => {
  return (
    <div className='main1' >
    <div className='text'>Add new Flying Spot </div>
    <div className='container'>
        <div className='heading'>Enter Spot Details</div>
    <div className='form'>
   
   <div className='stack'>
   <div className='input'>
    <div className='label'>name of spot </div>
    <input placeholder='Enter name of spot'></input>
   </div>
   <div className='uploader'>
    <div className='p'>Upload files</div>
    <div className='mainuploader'></div>
    <div className='stackright'>
        <div className='cancel'>cancel</div>
        <div className='save'>upload</div>
    </div>
   </div>
   </div>
  

<div className='stack'>

    <div className='imagess'><img src={drone}></img></div>
    <div className='stackright'>
        <div className='cancel'>cancel</div>
        <div className='save'>save</div>
    </div>
</div>

        </div>

    </div>

  </div>
  )
}

export default AddLocationImage