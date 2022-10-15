import { Modal } from "@mui/material";
import React from "react";

const ModalComponent = ({open = false, onClose }) => {
  return (
    <div>
     <Modal
        open={open}
        onClose={()=>onClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
      </Modal>
    </div>
  );
};

export default ModalComponent;
