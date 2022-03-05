import React from 'react'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'
import UpcomingEvents from '../components/UpcomingEvents'

function Events() {
  return (
    <div className="container-xxl">
        <NavBar page="event"/>
        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Upcoming Events</span>
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
        </div>
        <div className="pt-5 row">
          <center>
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Past Events</span>
          </center> 
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
           <UpcomingEvents />
        </div>

        <ParticleBackground />
    </div>
  )
}

export default Events