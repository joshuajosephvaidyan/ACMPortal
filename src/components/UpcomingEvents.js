import {React, useState} from 'react'
import { Modal,Button } from 'react-bootstrap';

function UpcomingEvents(props) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-md-4 col-lg-3 p-2" style={{minHeight:'50vh',maxHeight:'50vh'}}>
        <div style={{height:'60%'}} className="">
            <img src={props.url} style={{height:'100%',width:'50%',aspectRatio:'0.1',marginLeft:'25%',marginRight:'25%'}} className="img-fluid" alt="Event"/>
        </div>
        <div style={{height:'40%'}} className="d-flex flex-column align-items-center justify-content-center">
            <span className="h5" style={{fontWeight:'600',color:'#0093d1',lineHeight:'0.2'}}>{props.name}</span>
            <span style={{fontWeight:'600',color:'#0093d1'}}>{props.date}</span>
            <span data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontSize:'small',color:'darkgray',textDecoration:'none',cursor:'pointer'}} onClick={handleShow}>
              Know More
            </span>
        </div>

        
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{fontWeight:'bold'}}>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                  <span style={{fontWeight:'bold'}}>Date: </span>
                  <span>{props.date}</span>
                </div>
                <div>
                  <span style={{fontWeight:'bold'}}>Description: </span>
                  <span>{props.des}</span>
                </div>
                <div>
                  <span style={{fontWeight:'bold'}}>Description: </span>
                  <span><a href={props.formlink}>{props.formlink}</a></span>
                </div>
                <div>
                  <span style={{fontWeight:'bold'}}>Documentation: </span>
                  <span><a href={props.document}>View</a></span>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>



    </div>
  )
}

export default UpcomingEvents