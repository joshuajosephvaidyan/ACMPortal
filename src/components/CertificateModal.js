import React from 'react'
import { Modal,Button } from 'react-bootstrap'

function CertificateModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img src={props.cert} style={{maxHeight:'100vh',maxWidth:'100vw'}}></img>
    </Modal>
  )
}

export default CertificateModal