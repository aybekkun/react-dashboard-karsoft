import React from 'react'
import ReactPaginate from 'react-paginate'
import "./pagination.scss"
const Pagination = ({onPageChange, forcePage, pageCount}) => {
  return (
    <ReactPaginate
    className='pagintation'
    breakLabel="..."
    nextLabel=">"
    onPageChange={onPageChange}
    pageRangeDisplayed={5}
    forcePage={forcePage - 1 }
    pageCount={pageCount}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination