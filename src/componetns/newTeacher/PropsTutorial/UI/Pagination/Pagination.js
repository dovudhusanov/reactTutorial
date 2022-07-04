import React from 'react';
import {getPageArray} from "../utils/page";

function Pagination({props, totalPage, changePage, page}) {
    const pageArray = getPageArray(totalPage)
    return (
        <div>
            <ul className='pagination'>
                {pageArray.map(item => (
                    <button
                        key={item}
                        className={page === item ? 'btn btn-primary' : 'btn btn-outline-primary'}
                        onClick={() => changePage(item)}
                    >
                        {item}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;