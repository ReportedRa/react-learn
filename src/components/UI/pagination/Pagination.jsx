import React from "react";
import { usePagination } from "../../../hooks/usePagination";

// UI компонент для кнопок навигации (отключено)
const Pagination = ({ totalPages, page, changePage }) => {
    const pageRender = usePagination(totalPages);
    let pageArray = pageRender;
    return (
        <div className="page__wrapper">
            {pageArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? "page page__current" : "page"}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
