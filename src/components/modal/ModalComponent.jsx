import { Button, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import axios from "../../axios";
import "./modal.scss";
import Spinner from "../spinner/Spinner"
const ModalComponent = ({ isOpen, onClickClose }) => {
  const [text, setText] = React.useState("");
  const [send, setSend] = React.useState(false);
  const { searchParams } = useSelector((state) => state.leads);
  const onSendMessage = async (e) => {
    e.preventDefault();

    const username = searchParams.username
      ? `name=${searchParams.username}`
      : "";
    const surname = searchParams.surname
      ? `&surname=${searchParams.surname}`
      : "";
    const phone = searchParams.phone ? `&phone=${searchParams.phone}` : "";
    const company = searchParams.company
      ? `&company=${searchParams.company}`
      : "";
    const status = searchParams.userStatus
      ? `&status=${searchParams.userStatus}`
      : "";
    const fromDate = searchParams.from
      ? `&start_date=${searchParams.from}`
      : "";
    const beforeDate = searchParams.before
      ? `&end_date=${searchParams.before}`
      : "";
    try {
      setSend(true);
      await axios
        .get(
          `/message_send?text=${text}&${username}${surname}${phone}${company}${status}${fromDate}${beforeDate}`
        )
        .then(setSend(false));
    } catch (error) {
      console.log(error);
      alert("Сообщение не отправлена");
      setSend(false);
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
        {!send ? (
          <form onSubmit={onSendMessage}>
            <textarea
              value={text}
              placeholder="Пишите здесь"
              maxLength="1000"
              rows="4"
              cols="5"
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
