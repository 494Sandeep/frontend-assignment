import React from "react";

import './index.css';

const Pagination = ({
  totalRecords,
  rowPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // Total pages
  const totalPages = Math.ceil(totalRecords / rowPerPage);

  // Handle pagination
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange("prev")}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange("next")}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
