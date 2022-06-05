import React from "react"

function TableItems(props) {
    return(
        <tr>
            <td className='pt-3'>{props.num}</td>
            <td className='pt-3'>{props.progLang}</td>
            <td className='pt-3'>{props.course}</td>
            <td>
                <button className='btn btn-outline-danger'>
                    delete
                </button>
            </td>
        </tr>
    )
}

export default TableItems