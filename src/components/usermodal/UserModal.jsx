import { Modal } from "@mui/material";
import React from "react";
import "./usermodal.scss"
const UserModal = ({ isOpen, onClickClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClickClose}
      aria-labelledby="modal-modal-user"
      aria-describedby="modal-modal-settings"
    >
      <div className="usermodal">
        <div className="usermodal-info"><h3>Информация пользователе:</h3>
        <h4>Телеграм ID:</h4>
        <h4>Имя:</h4>
        <h4>Фамилия:</h4>
        <h4>Компания:</h4>
        <h4>Телефон:</h4>
        <h4>Статус:</h4>
        <h4>Создан:</h4>
        </div>
        <div className="usermodal-action">
            <h3>Действие</h3>
            <hr />
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
