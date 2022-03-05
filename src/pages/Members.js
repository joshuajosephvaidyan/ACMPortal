import React from 'react'
import MembersImage from '../components/MembersImage'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'

function Members() {
  return (
    <div className="container-xxl">
        <NavBar page="member"/>
        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Office Members</span>
           <MembersImage />
           <MembersImage />
           <MembersImage />
           <MembersImage />
           <MembersImage />
           <MembersImage />
        </div>
        <ParticleBackground />
    </div>
  )
}

export default Members