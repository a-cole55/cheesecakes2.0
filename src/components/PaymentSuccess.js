import success from "../assets/green-check-.png";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function PaymentSuccess(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);


  return (
    <>
      <Modal id="paymentSuccessPage" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modalTitle" closeButton>
          <Modal.Title className="paymentTitle">Payment Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="paymentSuccessfulInfo"><img id="success" src={success} alt="green check mark" />
        <p>We hope you enjoy your cheesecakes as much as we enjoyed making them!</p></Modal.Body>
      </Modal>
    </>
  );
}

// render(<PaymentSuccess />);
