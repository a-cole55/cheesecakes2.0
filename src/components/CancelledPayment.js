import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export default function CancelledPage() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);


  return (
    <>
      <Modal id="paymentSuccessPage" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modalTitle" closeButton>
          <Modal.Title className="paymentTitle" id="errorTitle">Your payment has been successfully cancelled.</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}