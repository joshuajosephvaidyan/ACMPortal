import React from 'react'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'

function About() {
  return (
    <div className="container-xxl">
        <NavBar page="about"/>
        <div className="d-flex align-items-center justify-content-center mx-2 mx-md-5" style={{height:'85vh',fontSize:'large',fontWeight:'bold'}}>
          <center>
            The Department of Computer Science and Engineering aspires to generate highly capable computing graduates that can 
            apply, build, and develop systems that relate to and integrate both software and hardware devices, as well as use 
            cutting-edge programming and problem-solving strategies. The Department of Computer Science and Engineering was 
            founded in 1995 with the primary goal of offering high-quality engineering education. Anna University has designated 
            it as a nodal centre. The Department has established itself as a leader in academics, sponsored research, and continuing 
            education.
          </center>    
        </div>
        <ParticleBackground />
    </div>
  )
}

export default About