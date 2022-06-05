import React, {useState} from "react";

function ValueUseState() {
const [value, setValue] = useState('dev')

    return(
        <>
            <p>Value: {value}</p>
            <input
                type="text"
                className='form-control'
                onChange={e => setValue(e.target.value)}
            />
        </>
    )
}

export default ValueUseState