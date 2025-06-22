import "./Pagination.css"
import type {Dispatch, SetStateAction} from "react";

const Pagination = ({pageCount, page, setPage}: {pageCount: number, page: number, setPage: Dispatch<SetStateAction<number>>} ) => {
    const arr = new Array(pageCount).fill(0).map((_, index) => index + 1)

    return (
        <div className="pagination">
            {arr.map((elem, index) => (
                <button key={index} className={"pagination-elem " + (page === index + 1 ? "active" : "")} onClick={() => setPage(index + 1)}>{elem}</button>
            ))}
        </div>
    );
};

export default Pagination;