import React from 'react';

const Pagination = ({ currentPage, postsPerPage, totalPosts, handlePagination, handlePaginationLeftClick, handlePaginationRightClick}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="page-group">
        <span>
          <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={(currentPage === 1) ? {fill: "#eeeeef"} : {}} onClick={() => handlePaginationLeftClick(1)}><path d="M14.25 17.58a1 1 0 0 1-.71-.3L9 12.7a1 1 0 0 1 0-1.4l4.5-4.58A1 1 0 0 1 15 6.7a1 1 0 0 1 0 1.42L11.15 12 15 15.88a1 1 0 0 1 0 1.42 1 1 0 0 1-.75.28z"></path></svg>
        </span>
        {pageNumbers.map(number => (
          <li className="page-item">
            <a href="#" onClick={() => handlePagination(number)} style={(currentPage === number) ? {fontWeight: "bold", color: "#333"} : {}}>
              {number}
            </a>
          </li>
        ))}
        <span>
          <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={(currentPage === pageNumbers.length) ? {fill: "#eeeeef"} : {}} onClick={() => handlePaginationRightClick(pageNumbers.length)}><path d="M9.75 17.58a1 1 0 0 1-.7-.28 1 1 0 0 1 0-1.42l3.8-3.88L9 8.12a1 1 0 1 1 1.41-1.42L15 11.3a1 1 0 0 1 0 1.4l-4.5 4.58a1 1 0 0 1-.75.3z"></path></svg>
        </span>
      </ul>
      <div className="page-text">
        <span>{currentPage} </span>
        <span>of </span>
        <span>{pageNumbers.length}</span>
      </div>
    </div>
  )
};

export default Pagination;