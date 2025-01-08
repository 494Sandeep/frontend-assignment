import React, { useState } from "react";
import Pagination from "../Pagination";

import './index.css';

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 5;

  const startIndex = (currentPage - 1) * rowPerPage;
  const currentPageData = data?.slice(startIndex, startIndex + rowPerPage);

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((data, index) => (
            <tr key={index}>
              <td>{data["s.no"]}</td>
              <td>{Math.round(data["percentage.funded"])}</td>
              <td>{data["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalRecords={data.length}
        rowPerPage={rowPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
};

export default Table;
