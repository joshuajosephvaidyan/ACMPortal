import React from 'react'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'

function About() {
  return (
    <div className="container-xxl">
        <NavBar page="about"/>
        <div className="">About</div>
        <ParticleBackground />
    </div>
  )
}

export default About