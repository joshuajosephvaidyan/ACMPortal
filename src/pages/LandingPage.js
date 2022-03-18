import React from 'react'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'
import {useEffect,useState} from 'react'
import firebase from '../firebaseconfig';

function LandingPage() {

   const [APIData,setAPIData] = useState([]);
   const ref = firebase.firestore().collection('LPImg');
 
   useEffect(() => {
     function getproductdetails(){
       ref.onSnapshot((Snapshot) =>{
         const items = [];
         Snapshot.forEach((doc)=>{
           items.push(doc.data());
         });
        setAPIData(items);
       });
     }
     getproductdetails()
   },[]);
   var imgUrl ;
  return (
    <div className='container-xxl'>  
            <NavBar page="home"/>
            <div className="row" style={{marginTop:'10vh',}}>
               <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                   <span className="mx-4" style={{fontSize:'500%',fontWeight:'700',color:'#0093D1'}}>ACM VEC</span><br/>
                   <span className="mx-4" style={{fontSize:'250%',fontWeight:'700',color:'#0093D1',marginTop:'-3rem'}}>Student Chapter</span>
                   <span className="mx-4" style={{fontSize:'150%',fontWeight:'600',color:'#HHH'}}>
                      Department of Computer Science and Engineering.
                   </span>    
               </div>
               <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
               {
                  APIData.map((data)=>{
                    imgUrl = data.url;
                  }
                  )
               }
                  <img src={imgUrl} alt="Coverimg" className="img-fluid mt-2" style={{maxHeight:'80vh',maxWidth:'100%'}}/>
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

export default LandingPage