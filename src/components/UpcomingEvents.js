import React from 'react'

function UpcomingEvents() {
  return (
    <div className="col-12 col-md-4 col-lg-3 p-2" style={{minHeight:'35vh',maxHeight:'50vh'}}>
        <div style={{height:'60%'}} className="">
          <img src={require('../assets/dummy.png')} style={{height:'100%',width:'100%',aspectRatio:'1'}} className="img-fluid" alt="dummy"/>
        </div>
        <div style={{height:'40%'}} className="d-flex flex-column align-items-center justify-content-center">
            <span className="h5" style={{fontWeight:'600',color:'#0093d1',lineHeight:'0.2'}}>Webinar</span>
            <span style={{fontWeight:'600',color:'#0093d1'}}>Date</span>
            <a href="none" style={{fontSize:'small',color:'darkgray',textDecoration:'none'}}>Know More</a>
        </div>
    </div>
  )
}

export default UpcomingEvents