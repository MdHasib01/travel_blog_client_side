import React from "react";

const PaginationCompo = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <p onClick={() => paginate(number)} className="page-link">
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationCompo;
