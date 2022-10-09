import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import "./search.scss"
const Search = () => {
  const [sortBy, setSortBy] = React.useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="search">
      <Box sx={{minWidth:120}}>
        <FormControl sx={{minWidth:233,marginRight:"20px"}}>
          <InputLabel id="demo-simple-select-label">Поиск по</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Поиск по"
            onChange={handleChange}
          >
            <MenuItem value="tg_id" >Телеграм ID</MenuItem>
            <MenuItem value="name" >Имя и Фамиля</MenuItem>
            <MenuItem value="phone" >По номеру телефона</MenuItem>
            <MenuItem value="company" >Компаний</MenuItem>
            <MenuItem value="status" >Статусу</MenuItem>
            <MenuItem value="created_at" >Дата создания аккаунта</MenuItem>
          </Select>
        </FormControl>
        <TextField  label="Текст" variant="outlined" />
      </Box>
    </div>
  );
};

export default Search;
