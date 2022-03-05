import React from 'react'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'

function Contact() {
  return (
    <div className='container-xxl'>  
    <NavBar page="contact"/>
        <div className="row" style={{marginTop:'10vh',minHeight:'85vh'}}>
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
              <span className="mx-4 h1" style={{fontWeight:'700',color:'#0093D1',marginTop:'-3rem'}}>Write To Us at</span>
              <span className="mx-4 h3" style={{fontWeight:'600',color:'darkgrey'}}>
                  xyz@nomail.com
              </span>    
          </div>
          <div className="col-12 col-lg-7 d-flex flex-column align-items-center justify-content-center">
          <span className="mb-3 h1" style={{fontWeight:'700',color:'#0093D1',marginTop:'-3rem'}}>Send Us A Query</span>
            <div class="mb-3" style={{width:'70%'}}>
              <label for="exampleFormControlInput1" class="form-label" style={{fontWeight:'700',color:'black'}}>Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div class="mb-3" style={{width:'70%'}}>
              <label for="exampleFormControlInput1" class="form-label" style={{fontWeight:'700',color:'black'}}>Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="xyz@nomail.com"/>
            </div>
            <div class="mb-3" style={{width:'70%'}}>
              <label for="exampleFormControlTextarea1" class="form-label" style={{fontWeight:'700',color:'black'}}>Your Query</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type your Query" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary" style={{backgroundColor:'#0093D1'}}>Send Query</button>
          </div>
        </div>
        <div className="row" style={{minHeight:'5vh'}}>
              <span className="d-flex align-items-center justify-content-center" style={{fontSize:"x-small",fontWeight:'800',color:'darkgrey',width:'100%'}}>
                  An Intellectual Property of ACM Velammal Engg College, Surapet
              </span>
        </div>
        <ParticleBackground />
    </div>
  )
}

export default Contact