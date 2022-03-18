import {React,useState,useEffect} from 'react'
import AchieversImage from '../components/AchieversImage'
import ConfettiBackground from '../components/ConfettiBackground'
import NavBar from '../components/NavBar'
import firebase from '../firebaseconfig';

function Achievers() {
  const [APIData,setAPIData] = useState([]); 
  const ref = firebase.firestore().collection('Achievers');

  useEffect(() => {
   function getstdetails(){
     ref.onSnapshot((Snapshot) =>{
       const items = [];
       Snapshot.forEach((doc)=>{
         items.push(doc.data());
       });
      setAPIData(items);
     });
   }
   getstdetails()
  },[]);  

  return (
    <div className='container-xxl'>  
            <NavBar page="achievers"/>
            <div className="pt-5 row">
               <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Congratulations Achievers</span>
               <span className="row justify-content-center">
               {
                  APIData.map((data)=>{
                     return(
                        <AchieversImage url={data.image} name={data.name} des={data.designation} smlink={data.social}/>
                     )
                  }
                  )
               }
               </span>
            </div>
            <ConfettiBackground />
    </div>
  )
}

export default Achievers