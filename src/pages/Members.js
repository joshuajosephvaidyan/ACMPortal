import {React,useState,useEffect} from 'react'
import MembersImage from '../components/MembersImage'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'
import firebase from '../firebaseconfig';

function Members() {

  const [APIData,setAPIData] = useState([]);
  const [APIData2,setAPIData2] = useState([]);
  const [APIData3,setAPIData3] = useState([]);

  const ref = firebase.firestore().collection('StudentMembers');
  const ref2 = firebase.firestore().collection('Members');
  const ref3 = firebase.firestore().collection('WebTeam');

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
    function gettrdetails(){
      ref2.onSnapshot((Snapshot) =>{
        const items2 = [];
        Snapshot.forEach((doc)=>{
          items2.push(doc.data());
        });
       setAPIData2(items2);
      });
    }
    function getwtdetails(){
      ref3.onSnapshot((Snapshot) =>{
        const items3 = [];
        Snapshot.forEach((doc)=>{
          items3.push(doc.data());
        });
       setAPIData3(items3);
      });
    }
    getstdetails()
    gettrdetails()
    getwtdetails()
  },[]); 

  return (
    <div className="container-xxl">
        <NavBar page="member"/>

        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Faculty Members</span>
           <span className="row justify-content-center">
           {
             APIData2.map((data)=>{
                return(
                  <MembersImage url={data.image} name={data.name} des={data.designation} smlink={data.social}/>
                )
             }
             )
           }
           </span>
        </div>

        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Board Members</span>
           <span className="row justify-content-center">
           {
             APIData.map((data)=>{
                return(
                  <MembersImage url={data.image} name={data.name} des={data.designation} smlink={data.social}/>
                )
             }
             )
           }
           </span>
        </div>

        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Web developement Team</span>
           <span className="row justify-content-center">
           {
             APIData3.map((data)=>{
                return(
                  <MembersImage url={data.image} name={data.name} des={data.designation} smlink={data.social}/>
                )
             }
             )
           }
           </span>
        </div>

        <div className="row" style={{minHeight:'5vh'}}>
                  <span className="d-flex align-items-center justify-content-center" style={{fontSize:"x-small",fontWeight:'800',color:'darkgrey',width:'100%'}}>
                      An Intellectual Property of ACM Velammal Engg College, Surapet
                  </span>
        </div>

    </div>
  )
}

export default Members