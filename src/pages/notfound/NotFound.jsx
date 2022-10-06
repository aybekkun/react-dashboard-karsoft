import React from 'react'
import { Link } from 'react-router-dom'
import "./notFound.scss"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>Страница не найдена!!!</h1>
      <Link to="/"><KeyboardBackspaceOutlinedIcon/> Вернуться на главную</Link>
    </div>
  )
}

export default NotFound