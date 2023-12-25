import React from 'react'
import groups from "./image/group.jpeg"
import "./Group.css"
import star from "./image/star.png"

const Group = () => {
  return (
   <div className='groups'>
<div className='stack'>
    <div className='heading'>Groups</div>
   <div className='creategroup'>Create a Group</div>
</div>

<div className='mainPage'>
<div className='groupcard'>
<div className='stack'>

    <div className='leftgroup'><img src={groups}></img></div>
    <div className='rightgroup'>
        <div className='p'>FPV mumbai</div>
        <div className='p'>jay kishor-admin</div>
        <div className='stack'>
            <div className='rates'>
                <div>Ratings</div>
                <div>4.5</div>
                <div><img src={star}></img></div>
            </div>
            <div className='followers'>
            <div>followers</div>
                <div>1000+</div>
                <div><img></img></div>
            </div>
        </div>
    </div>
</div>

<div className='downStack'>
    <div className='text'>About</div>
    <div className='p'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <button className='following'>follow</button>
</div>
</div>

</div>

   </div>
  )
}

export default Group