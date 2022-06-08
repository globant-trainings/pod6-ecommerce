import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({ getItems }) => {
  const allItems = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const allPagesLenght = Math.ceil(allItems.length / 10);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    getItems();
  }, [currentPage, getItems]);

  return (
    <div className="paginationContainer">
      <p className="paginationContainer--availableItems">
        10/{allItems?.length}
      </p>
      <div className="paginationContainer--pagesAndHandlers">
        {currentPage !== 1 && <p onClick={goToPreviousPage}>Back</p>}
        <div className="paginationContainer--pagesAndHandlers__pages">
          <p className="page">{currentPage}</p>
        </div>
        {currentPage !== allPagesLenght && <p onClick={goToNextPage}>Next</p>}
      </div>
    </div>
  );
};

export default Pagination;
