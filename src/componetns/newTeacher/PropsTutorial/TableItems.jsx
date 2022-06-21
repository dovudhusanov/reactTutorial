import React from "react"
import BtnOutlineDanger from "./Button/BtnOutlineDanger";
import "./PropsStyle.css"

function TableItems(props) {
    return(
        <tr>
            <td>
                <span>{props.number}. </span>
                <b> {props.post.title}</b>
                <p className='w-75'>{props.post.body}</p>
            </td>
            <td>
                <BtnOutlineDanger onClick={() => props.remove(props.post)}>
                    delete
                </BtnOutlineDanger>
            </td>
        </tr>
    )
}

export default TableItems