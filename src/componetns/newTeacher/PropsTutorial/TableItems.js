import React from "react"
import BtnOutlineDanger from "./Button/BtnOutlineDanger";
import "./PropsStyle.css"

function TableItems(props) {
    return(
        <tr>
            <td className='pt'>{props.number}</td>
            <td className='pt'>{props.post.title}</td>
            <td className='pt'>{props.post.stack}</td>
            <td>
                <BtnOutlineDanger onClick={() => props.remove(props.post)}>
                    delete
                </BtnOutlineDanger>
            </td>
        </tr>
    )
}

export default TableItems