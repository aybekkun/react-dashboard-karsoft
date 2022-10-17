import { Modal } from "@mui/material";
import React from "react";

const ModalComponent = ({ isOpen, onClickClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        
      </div>
    </Modal>
  );
};

export default ModalComponent;
