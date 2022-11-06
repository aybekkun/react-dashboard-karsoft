import { Button, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import axios from "../../axios";
import "./modal.scss";
import Spinner from "../spinner/Spinner";
const ModalComponent = ({ isOpen, onClickClose }) => {
  const [text, setText] = React.useState("");
  const [isSend, setIsSend] = React.useState(false);
  const { searchParams } = useSelector((state) => state.leads);
  const onSendMessage = async (e) => {
    e.preventDefault();
    const username = searchParams.username;
    const surname = searchParams.surname;
    const phone = searchParams.phone;
    const company = searchParams.company;
    const status = searchParams.userStatus;
    const fromDate = searchParams.from;
    const beforeDate = searchParams.before;
    const fd = new FormData();
    fd.append("text", text)
    fd.append("phone", phone);
    fd.append("name", username);
    fd.append("surname", surname);
    fd.append("company", company);
    fd.append("comment", "");
    fd.append("status", status);
    fd.append("start_date", fromDate);
    fd.append("end_date", beforeDate);
    try {
      setIsSend(true);
      await axios.post(`/message_send`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSend(false);
      setText("");
    } catch (error) {
      console.log(error);
      setIsSend(false);
      alert("Сообщение не отправлена");
    }
  };
  return (
    <Modal
      open={isOpen}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        <h3>
          Написать письмо всем{" "}
          <Button onClick={() => setText("")}>Очистить</Button>
        </h3>
        {!isSend ? (
          <form onSubmit={onSendMessage}>
            <textarea
              value={text}
              placeholder="Пишите здесь"
              maxLength="1000"
              rows="5"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <p>
              Количество знаков:
              <span className="count">
                {text.length >= 999 ? "Лимит знаков" : text.length}
              </span>
            </p>
            <Button type="submit">Отправить</Button>
          </form>
        ) : (
          <Spinner />
        )}
      </div>
    </Modal>
  );
};

export default ModalComponent;
