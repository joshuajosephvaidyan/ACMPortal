import {React,useEffect,useState} from 'react'
import NavBar from '../components/NavBar'
import UpcomingEvents from '../components/UpcomingEvents'
import firebase from '../firebaseconfig';

function Events() {

  const [APIData,setAPIData] = useState([]);
  const ref = firebase.firestore().collection('Events');

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

  return (
    <div className="container-xxl">
        <NavBar page="event"/>
        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Upcoming Events</span>
           {
             APIData.map((data)=>{
                return(
                  <UpcomingEvents url={data.image} name={data.name} date={data.date} des={data.description} formlink={data.formlink} document={data.doc}/>
                )
             }
             )
           }
        </div>
        <div className="pt-5 row">
          <center>
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Past Events</span>
          </center> 
        </div>

    </div>
  )
}

export default Events