import React, {useState} from "react"
import THead from "./THead";
import TBody from "./TBody";

function UseRefTask() {

    const [value, setValue] = useState([
        {title: "Java", stack: 'Back-End'}
    ])
    const [title, setTitle] = useState('')
    const [stack, setStack] = useState('')

    return(
        <>
            <div className='app mx-auto'>
                <div className='input-group d-flex flex-column w-100'>
                    <input
                        type="text"
                        placeholder='Title'
                        className='form-control w-100'
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Stack'
                        className='form-control w-100 mt-3'
                        onChange={e => setStack(e.target.value)}
                    />
                </div>
                <table>
                    <THead />
                </table>
            </div>
        </>
    )
}

export default UseRefTask