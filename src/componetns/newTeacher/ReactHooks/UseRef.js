import React, {useEffect, useRef, useState} from "react"

// let renderCount = 0

function UseRef() {

    const [value, setValue] = useState("default")
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef("")

    // console.log(renderCount)

    useEffect(() => {
        // renderCount.current++
        console.log(inputRef.current.value)
    }, [value])

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <>
            <p>Amount of rendering: {renderCount.current}</p>
            <p>Past value: {prevValue.current}</p>
            <input
                type="text"
                placeholder='Input the info'
                onChange={e => setValue(e.target.value)}
                value={value}
                ref={inputRef}
            />
            <button
                className={'btn btn-success'}
                onClick={focus}
            >
                Click
            </button>
        </>
    );
}

export default UseRef