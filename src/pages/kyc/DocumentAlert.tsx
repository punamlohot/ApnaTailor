import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface RegisterModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentAlert: React.FC<RegisterModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const navigate = useNavigate();
  const handleClose = () => setOpenModal(false);

  const docLogo =
    "https://i.pinimg.com/736x/58/77/74/587774817d039b7f6567769553b16e53.jpg";

  return (
    <>
      <Modal show={openModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="m-2 display-6">Complete Your KYC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          {/* <div className="h6 text-center">
            Watch the video until you know exactly what to do and how to do it
          </div> */}
          <div className="text-center d-flex">
            <img
              src={docLogo}
              alt="logo"
              className=""
              width="50px"
              height="50px"
            ></img>
            <p className="m-2 h4 ">
              Be ready with your documents for this step
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DocumentAlert;
