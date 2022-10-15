import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import DownloadIcon from '@mui/icons-material/Download';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useField } from "../../hooks/use-fieled";
import { setCurrentPage, setSearchParams } from "../../redux/slices/leadsSlice";
import axios from "../../axios";
import "./search.scss";
import ModalComponent from "../modal/ModalComponent";
const Search = () => {
  const dispatch = useDispatch();
  const {searchParams} = useSelector(state => state.leads);
  const [fromDate, setFromDate] = React.useState(dayjs(""));
  const [beforeDate, setBeforeDate] = React.useState(dayjs(""));
  const [open, setOpen] = React.useState(false);

  const { reset: resetUsername, ...username } = useField("text");
  const { reset: resetSurname, ...surname } = useField("text");
  const { reset: resetPhone, ...phone } = useField("text");
  const { reset: resetCompany, ...company } = useField("text");
  const { reset: resetUserStatus, ...userStatus } = useField("text");

  const handleChangeFromDate = (newValue) => {
    setFromDate(newValue);
  };

  const handleChangeBeforeDate = (newValue) => {
    setBeforeDate(newValue);
  };

  const onClickReset = () => {
    dispatch(setCurrentPage(1));
    resetUsername();
    resetSurname();
    resetPhone();
    resetCompany();
    resetUserStatus();
    setFromDate(null);
    setBeforeDate(null);
    dispatch(setSearchParams({}));
  };

  const onClickSearch = () => {
    dispatch(setCurrentPage(1));
    let newFromDate = fromDate;
    let newBeforeDate = beforeDate;
    let formattedFromDate = newFromDate.format("YYYY-MM-DD");
    let formattedBeforeDate = newBeforeDate.format("YYYY-MM-DD");
    console.log(formattedFromDate);
    dispatch(
      setSearchParams({
        username: username.value,
        surname: surname.value,
        phone: phone.value,
        company: company.value,
        userStatus: userStatus.value,
        from: formattedFromDate === "Invalid Date" ? "" : formattedFromDate,
        before:
          formattedBeforeDate === "Invalid Date" ? "" : formattedBeforeDate,
      })
    );
  };
const onClickDownload = async ()=>{
  const username = searchParams.username ? `name=${searchParams.username}` : "";
  const surname = searchParams.surname ? `&surname=${searchParams.surname}` : "";
  const phone = searchParams.phone ? `&phone=${searchParams.phone}` : "";
  const company = searchParams.company ? `&company=${searchParams.company}` : "";
  const status = searchParams.userStatus ? `&status=${searchParams.userStatus}` : "";
  const fromDate = searchParams.from ? `&start_date=${searchParams.from}` : "";
  const beforeDate = searchParams.before ? `&end_date=${searchParams.before}` : "";
  
  await axios({
    url: `/leads_export?${username}${surname}${phone}${company}${status}${fromDate}${beforeDate}`,
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.xlsx');
    document.body.appendChild(link);
    link.click();
  });
}
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
              inputFormat="DD.MM.YYYY"
              value={fromDate}
              onChange={handleChangeFromDate}
              renderInput={(params) => (
                <TextField
                  sx={{
                    minWidth: "100px",
                    marginRight: "5px",
                    marginBottom: "10px",
                  }}
                  size="small"
                  variant="standard"
                  {...params}
                />
              )}
            />
            <DesktopDatePicker
              label="До"
              inputFormat="DD.MM.YYYY"
              value={beforeDate}
              onChange={handleChangeBeforeDate}
              renderInput={(params) => (
                <TextField
                  sx={{
                    minWidth: "100px",
                    marginRight: "5px",
                    marginBottom: "10px",
                  }}
                  size="small"
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
              <SearchOutlinedIcon />
              Поиск
            </Button>
            <Button
              onClick={onClickReset}
              size="small"
              variant="outlined"
              color="error"
            >
              <DeleteOutlineOutlinedIcon />
              Очистить
            </Button>
            <Button
              onClick={onClickDownload}
              sx={{ marginLeft: "10px" }}
              size="small"
              variant="outlined"
              color="success"
            >
              <DownloadIcon/>
              Скачать Excel
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Search;
