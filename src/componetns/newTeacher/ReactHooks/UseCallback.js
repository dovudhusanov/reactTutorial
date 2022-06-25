import React, {useCallback, useMemo, useState} from "react"
import ItemsList from "./ItemsList";

function UseCallback() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(0)
    



    const style = {
        color: colored ? 'crimson' : 'white'
    }

    const generateItem = useCallback((indexNum) => {
        return new Array(count).fill('').map((_, index) => `Element ${index + indexNum}`)
    }, [count])

    return (
        <>
            <h1 style={style} className='text-center'>Amount: {count}</h1>
            <button
                className='btn btn-success'
                onClick={() => setCount(prevState => prevState + 1)}
            >Add
            </button>
            <button
                className='btn btn-success'
                onClick={() => setColored(prevState => !prevState)}
            >Change color
            </button>

            <ItemsList getItems={generateItem} />
        </>
    )
}

export default UseCallback