import React from 'react';
import CommentsTable from '../../components/commentstable/CommentsTable';
import "./comments.scss"
const Comments = () => {
  return (
    <div className='comments'>
      <CommentsTable/>
    </div>
  )
}

export default Comments