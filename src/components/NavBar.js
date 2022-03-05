import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {
  return (
    <div className="container-fluid mb-5">
        <nav className="navbar navbar-fluid fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{fontWeight:'700',color:'#332C6F'}}>
               <img src={require('../assets/ACMlogo.jfif')} alt="ACM" className="img-fluid" style={{maxHeight:'20%',maxWidth:'20%'}}/>  
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to ="/" style={{textDecoration:'none',color:'none'}}>
                    <span className="nav-link active" aria-current="page" style= { props.page ==='home' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} } >Home</span>
                    <div className="align-items-center justify-content-center" style= { props.page ==='home' ? {display:'flex'} : {display:'none'} }>
                      <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                 <Link to ="/about" style={{textDecoration:'none',color:'none'}}>
                    <span className="nav-link" href="none" style= { props.page ==='about' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} } >About</span>
                    <span className="align-items-center justify-content-center" style= { props.page ==='about' ? {display:'flex'} : {display:'none'} }>
                      <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                    </span>
                 </Link> 
                </li>
                <li className="nav-item">
                 <Link to ="/events" style={{textDecoration:'none',color:'none'}}> 
                    <span className="nav-link" href="none" style= { props.page ==='event' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} }>Events</span>
                    <span className="align-items-center justify-content-center" style= { props.page ==='event' ? {display:'flex'} : {display:'none'} }>
                      <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                    </span>
                 </Link> 
                </li>
                <li className="nav-item">
                 <Link to ="/members" style={{textDecoration:'none',color:'none'}}> 
                    <span className="nav-link" href="none" style= { props.page ==='member' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} }>Members</span>
                    <span className="align-items-center justify-content-center" style= { props.page ==='member' ? {display:'flex'} : {display:'none'} }>
                      <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                    </span>
                 </Link>   
                </li>
                <li className="nav-item">
                 <Link to ="/gallery" style={{textDecoration:'none',color:'none'}}> 
                    <span className="nav-link" href="none" style= { props.page ==='gallery' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} }>Gallery</span>
                    <span className="align-items-center justify-content-center" style= { props.page ==='gallery' ? {display:'flex'} : {display:'none'} }>
                      <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to ="/contact" style={{textDecoration:'none',color:'none'}}>
                      <span className="nav-link" href="none" style= { props.page ==='contact' ? {color:'#0093D1',fontWeight:'800'} : {color:'#000',fontWeight:'700'} }>Contact</span>
                      <span className="align-items-center justify-content-center" style= { props.page ==='contact' ? {display:'flex'} : {display:'none'} }>
                        <img src={require("../assets/bluemarker.png")} alt="bluemarker" className="d-none d-lg-block" style={{maxHeight:'10px',maxWidth:'10px',marginTop:'-0.8rem'}}></img>           
                      </span>
                  </Link>
                </li>
            </ul>
            <a className="navbar-brand d-flex justify-content-end" href="none" style={{color:'gold',fontWeight:'700'}}>
                <img src={require('../assets/vec.png')} alt="vec" className="img-fluid" style={{maxHeight:'20%',maxWidth:'20%'}}/>
            </a>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default NavBar