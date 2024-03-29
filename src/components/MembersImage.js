import React from 'react'
import '../memberstyle.css'


function MembersImage(props) {
  return (
    <div class="col-12 col-md-4 col-lg-4 p-2 d-block" style={{minHeight:'50vh'}}>
        <div style={{height:'60%',position:'relative'}} className="d-flex align-items-center justify-content-center">
          <div style={{position:'absolute'}}>  
             <img src={props.url} style={{height:'170px',width:'170px',verticalAlign:'middle',borderRadius:'100%'}} alt="image" className="img-fluid"/>
          </div>
          <div className="overlay d-flex justify-content-center align-items-center" style={{position:'absolute',backgroundColor:"rgba(0, 0, 0, 0.5)",opacity:'0',height:'170px',width:'170px',color:'white',borderRadius:'100%'}}>
             <a href={props.smlink}> 
              <div className="d-flex align-items-center justify-content-center">
                  <img src={require('../assets/inlogo.png')} alt="inlogo" style={{height:'30%',width:'30%'}}/>
              </div>
             </a> 
          </div>
        </div>
        <div style={{height:'20%'}} className="d-flex flex-column align-items-center justify-content-center">
            <span className="h5" style={{fontWeight:'600',color:'#0093d1',lineHeight:'1.5'}}>{props.name}</span>
            <span className="" style={{fontSize:'normal',fontWeight:'600',color:'darkgrey',lineHeight:'0.1'}}>{props.des}</span>
        </div>
    </div>
  )
}

export default MembersImage