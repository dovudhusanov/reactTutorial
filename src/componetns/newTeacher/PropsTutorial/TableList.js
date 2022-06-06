import React from "react";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";
import '../../../style/style.css'

function TableList({posts, title}) {
    return(
        <>
            <h5 className="text-center mt-3">{title}</h5>
            <table className="table table-striped">
                <TableHeader />
                <tbody className="tbody">
                {posts.map((post, i) => (
                    <TableItems number={i + 1} post={post} key={post.id}/>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TableList