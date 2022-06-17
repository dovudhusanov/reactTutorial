import React from "react"

function TBody(props) {
    return(
        <>
            <tbody>
                <tr>
                    <td>{props.value.title}</td>
                    <td>{props.value.stack}</td>
                </tr>
            </tbody>
        </>
    )
}

export default TBody