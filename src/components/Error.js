import error from "../assets/erro.png";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function ErrorPage() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);


  return (
    <>
      <Modal id="paymentSuccessPage" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modalTitle" closeButton>
          <Modal.Title className="paymentTitle" id="errorTitle">There was an error processing your payment.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="paymentSuccessfulInfo"><img id="error" src={error} alt="red error icon" />
        <p>Please try again.</p></Modal.Body>
      </Modal>
    </>
  );
}