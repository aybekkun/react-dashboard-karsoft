import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "@mui/material";
import React from "react";

import "./usermodal.scss";
import { useSelector } from "react-redux";
import BasicTabs from "../basictabs/BasicTabs";

const UserModal = ({ isOpen, onClickClose }) => {
  const { userItem } = useSelector((state) => state.leads);
  return (
    <Modal
      open={isOpen}
      onClose={onClickClose}
      aria-labelledby="modal-modal-user"
      aria-describedby="modal-modal-settings"
    >
      <div className="usermodal">
        <div className="usermodal-info">
          <h3>Информация пользователе</h3>
          <h4>
            Телеграм ID: <span>{userItem.tg_id}</span>
          </h4>
          <h4>
            Имя: <span>{userItem.name}</span>
          </h4>
          <h4>
            Фамилия: <span>{userItem.surname}</span>
          </h4>
          <h4>
            Компания: <span>{userItem.company}</span>
          </h4>
          <h4>
            Телефон: <span>{userItem.phone}</span>
          </h4>
          <h4>
            Статус: <span>    {userItem.status
                      ? userItem.status === "joined"
                        ? "Подписался"
                        : userItem.status === "start"
                        ? "Старт"
                        : userItem.status === "signed"
                        ? "Присоединился"
                        : ""
                      : ""}</span>
          </h4>
          <h4>
            Создан:{" "}
            <span>
              {new Date(userItem.created_at).toLocaleString("ru-RU", {
                timeZone: "UTC",
              })}
            </span>
          </h4>
        </div>
        <div className="usermodal-action">
          <div className="usermodal-title">
            <h3>Действие</h3>
    
            <CloseIcon size="large" onClick={onClickClose} />
          </div>
          <div className="usermodal-tabs">
            <BasicTabs/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
