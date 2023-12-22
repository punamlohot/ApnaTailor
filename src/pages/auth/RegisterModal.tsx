import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface RegisterModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const navigate = useNavigate();
  const handleClose = () => setOpenModal(false);

  const handleNext = () => {
    navigate("/profile");
  };
  return (
    <>
      <Modal show={openModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="m-2">Register as</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="h6 text-center">Select Your Preference : </div> */}
          <div className="text-center">
            {/* <Button
              variant="light"
              onClick={handleNext}
              className="btn-lg mb-2"
            >
              Register as an Individual
            </Button>
            <br></br> */}
            <Button
              variant="light"
              onClick={handleNext}
              className="btn-lg mb-2"
            >
              Register as an Agency
            </Button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleNext}>
            Next
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default RegisterModal;
