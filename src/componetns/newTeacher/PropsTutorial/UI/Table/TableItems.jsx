import React from "react"
import BtnOutlineDanger from "../Button/BtnOutlineDanger";
import "../../PropsStyle.css"

function TableItems(props) {
    return (
        <tr>
            <td>
                <span className='text-black'>{props.post.id}. </span>
                <b className='text-black'> {props.post.title}</b>
                <p className='w-75 text-black'>{props.post.body}</p>
            </td>
            <td>
                <BtnOutlineDanger onClick={() => props.remove(props.post)}>
                    delete
                </BtnOutlineDanger>
            </td>
        </tr>
    );
}

export default TableItems