import React from "react";
import { Modal } from "react-bootstrap";

interface RegisterModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: React.ReactNode;
  body: React.ReactNode;
}

const ModalComponent: React.FC<RegisterModalProps> = ({
  openModal,
  setOpenModal,
  title,
  body,
}) => {
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Modal show={openModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="m-2">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
