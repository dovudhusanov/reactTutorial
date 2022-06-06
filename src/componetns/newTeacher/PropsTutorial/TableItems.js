import React from "react"
import BtnOutlineDanger from "./Button/BtnOutlineDanger";

function TableItems(props) {
    return(
        <tr>
            <td className='pt-3'>{props.number}</td>
            <td className='pt-3'>{props.post.title}</td>
            <td className='pt-3'>{props.post.stack}</td>
            <td>
                <BtnOutlineDanger>
                    delete
                </BtnOutlineDanger>
            </td>
        </tr>
    )
}

export default TableItems