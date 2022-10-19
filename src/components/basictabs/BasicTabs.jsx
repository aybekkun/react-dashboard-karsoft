import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import "./basiictabs.scss"

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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


const BasicTabs = () => {
    const [value, setValue] = React.useState(0);
    const [text, setText] = React.useState("");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div className='basictabs'>
       <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Написать письмо"  />
          <Tab label="взаимодействие"  />
          <Tab label="Ответы"  />
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="basicmodal">
        <h3>
          Написать письмо пользователю <Button onClick={()=>setText("")}>Очистить</Button>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
       Ответы пользователя
      </TabPanel>
    </Box>
    </div>
  )
}

export default BasicTabs