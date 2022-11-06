import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import axios from "../../axios";
import Spinner from "../spinner/Spinner";
import "./basiictabs.scss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <p>{children}</p>}
    </div>
  );
}

const BasicTabs = () => {
  const { userItem } = useSelector((state) => state.leads);
  const [userComment, setUserComment] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [isSend, setIsSend] = React.useState(false);
  const fetchAnswear = async (e) => {
    try {
      const { data } = await axios.get(`/leads/${userItem.id}`);
      setUserComment(data.data[0].comment)
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchAnswear();
  };

  const onSendComment = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("comment", comment);
    try {
      setIsSend(true);
      await axios.post(`/leads/${userItem.id}`, fd);
      console.log(`/leads/${userItem.id}`);
      setIsSend(false);
      setText("");
    } catch (error) {
      console.log(error);
      setIsSend(false);
      alert("Сообщение не отправлена");
    }
  };
  const onSendMessage = async (e) => {
    e.preventDefault();
    const username = userItem.name;
    const surname = userItem.surname;
    const phone = userItem.phone;

    const fd = new FormData();
    fd.append("text", text);
    fd.append("phone", phone);
    fd.append("name", username);
    fd.append("surname", surname);
    fd.append("company", "");
    fd.append("comment", "");
    fd.append("status", "");
    fd.append("start_date", "");
    fd.append("end_date", "");
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
    <div className="basictabs">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Написать письмо" />
            <Tab label="взаимодействие" />
            <Tab label="Комментарий" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="basicmodal">
            <h3>
              Написать письмо пользователю{" "}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="basicmodal">
            <h3>
              Оставить комментарий
              <Button onClick={() => setComment("")}>Очистить</Button>
            </h3>
            {!isSend ? (
              <form onSubmit={onSendComment}>
                <textarea
                  value={comment}
                  placeholder="Пишите здесь"
                  maxLength="1000"
                  rows="5"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <p>
                  Количество знаков:
                  <span className="count">
                    {comment.length >= 999 ? "Лимит знаков" : comment.length}
                  </span>
                </p>
                <Button type="submit">Отправить</Button>
              </form>
            ) : (
              <Spinner />
            )}
          </div>
        </TabPanel>
        <TabPanel  value={value} index={2}>
          <p style={{paddingLeft:"20px", fontSize:"20px"}}>{userComment}</p>
        </TabPanel>
      </Box>
    </div>
  );
};

export default BasicTabs;
