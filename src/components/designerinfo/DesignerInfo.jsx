import React from 'react'
import { useParams } from 'react-router-dom'

const DesignerInfo = () => {
    const {id} = useParams()
  return (
    <div className='designerinfo'>
        <h2>{id}</h2>
        <p>Smacher</p>
    </div>
  )
}

export default DesignerInfo