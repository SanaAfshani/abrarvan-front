import React from "react";

export default function Paginations({ nPages, page, setPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };
  const prevPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  return (
    <nav
      aria-label="Page navigation example "
      className="d-flex justify-content-lg-center overflowPagination"
    >
      <ul class="pagination">
        <li class="page-item">
          <button class="page-link" aria-label="Previous" onClick={prevPage}>
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </button>
        </li>
        {pageNumbers.map((pnumber) => (
          <li class="page-item">
            <a
              href={`/articles${pnumber !== 1 ? `/page/${pnumber}` : ``}`}
              class={`btn page-link ${
                page === pnumber ? "activeButtonPagination" : ""
              }`}
              // onClick={() => setPage(pnumber)}
            >
              {pnumber}
            </a>
          </li>
        ))}
        <li class="page-item">
          <button class="page-link" aria-label="Next" onClick={nextPage}>
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
