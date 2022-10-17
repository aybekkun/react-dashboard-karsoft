import { Button, Modal } from "@mui/material";
import React from "react";
import "./modal.scss";
const ModalComponent = ({ isOpen, onClickClose }) => {
  const [text, setText] = React.useState("");
  return (
    <Modal
      open={isOpen}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        <h3>
          Написать письмо всем <Button onClick={()=>setText("")}>Очистить</Button>
        </h3>
        <textarea
          value={text}
          onkeyup="countLetters()"
          placeholder="Пишите здесь"
          maxLength="1000"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <p>
          Количество знаков:
          <span class="count">
            {text.length >= 999 ? "Лимит знаков" : text.length}
          </span>
        </p>
        <Button>Отправить</Button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
