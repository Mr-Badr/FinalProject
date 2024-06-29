import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate pagination numbers
  const paginationNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationNumbers.push(
      <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
        <a className="page-link mx-1 rounded" href="#" onClick={() => onPageChange(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <div className="card-footer">
      <nav>
        <ul className="pagination justify-content-center mb-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link mx-1 rounded" href="#" onClick={() => onPageChange(currentPage - 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
              </svg>
            </a>
          </li>
          {paginationNumbers}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a className="page-link mx-1 rounded" href="#" onClick={() => onPageChange(currentPage + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
