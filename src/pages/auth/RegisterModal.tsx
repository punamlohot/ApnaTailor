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
          <Modal.Title> Register as</Modal.Title>
        </Modal.Header>
        <Modal.Body>Individual</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
