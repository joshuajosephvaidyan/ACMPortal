import React from 'react'

function GalleryImage() {
  return (
    <div class="col-12 col-md-4 col-lg-3 p-2" style={{minHeight:'50vh'}}>
        <div style={{height:'60%'}} className="">
          <img src={require('../assets/dummy.png')} alt="dummy" style={{height:'100%',width:'100%'}} className="img-fluid"/>
        </div>
        <div style={{height:'20%'}} className="d-flex flex-column align-items-center justify-content-center">
            <span className="h5" style={{fontWeight:'600',color:'#0093d1',lineHeight:'0.1'}}>Symposium</span>
        </div>
    </div>
  )
}

export default GalleryImage