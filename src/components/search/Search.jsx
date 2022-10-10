import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import "./search.scss";
import { useField } from "../../hooks/use-fieled";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(dayjs(""));

  const { reset: resetUsername, ...username } = useField("text");
  const { reset: resetSurname, ...surname } = useField("text");
  const { reset: resetPhone, ...phone } = useField("text");
  const { reset: resetCompany, ...company } = useField("text");
  const { reset: resetUserStatus, ...userStatus } = useField("text");

  // const handleChange = (event) => {
  //   setUserStatus(event.target.value);
  // };

  const onClickReset = () => {
    resetUsername();
    resetSurname();
    resetPhone();
    resetCompany();
    resetUserStatus();
  };

  const onClickSearch = () => {

  };

  const handleChangeDate = (value) => {
    setValue(value);
  };

  return (
    <div className="search">
      <Box sx={{ minWidth: 120 }}>
        <div className="inputs">
          <TextField
            className="search-input"
            size="small"
            label="Имя"
            variant="standard"
            {...username}
          />
          <TextField
            className="search-input"
            size="small"
            label="Фамилия"
            variant="standard"
            {...surname}
          />
          <TextField
            className="search-input"
            size="small"
            label="Телефон Номер"
            variant="standard"
            {...phone}
          />
          <TextField
            className="search-input"
            size="small"
            label="Компания"
            variant="standard"
            {...company}
          />
          <FormControl
            sx={{ minWidth: "100px", marginRight: "5px", marginBottom: "10px" }}
            variant="standard"
            size="small"
          >
            <InputLabel id="demo-simple-select-label">Статус</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Поиск по"
              {...userStatus}
            >
              <MenuItem value="joined">joined</MenuItem>
              <MenuItem value="signed">signed</MenuItem>
              <MenuItem value="start">start</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="От"
              inputFormat="YYYY-MM-DD"
              value={value}
              onChange={handleChangeDate}
              renderInput={(params) => (
                <TextField
                  sx={{ marginRight: "5px", marginBottom: "10px" }}
                  variant="standard"
                  {...params}
                />
              )}
            />
            <DesktopDatePicker
              label="До"
              inputFormat="YYYY-MM-DD"
              value={value}
              onChange={handleChangeDate}
              renderInput={(params) => (
                <TextField
                  sx={{ marginRight: "5px", marginBottom: "10px" }}
                  variant="standard"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>

          <Box>
            <Button 
             onClick={onClickSearch}
              sx={{ marginRight: "10px" }}
              size="small"
              variant="outlined"
              color="primary"
            >
              Поиск
            </Button>
            <Button
              onClick={onClickReset}
              size="small"
              variant="outlined"
              color="error"
            >
              Очистить параметры
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Search;
