import React, {useState} from 'react';
import './Hook.css'

function UseState(props) {

    function randomNumber() {
        console.log("Calculate...")
        return Math.trunc(Math.random() * 20);
    }
    const [count, setCount] = useState(randomNumber)

    const [state, setState] = useState(
        {text: "number", data: Date.now()}
    )


    function RandomNum () {
        return Math.trunc(Math.random() * 20)
    }

    // const [count, setCount] = useState(RandomNum())
    function inc() {
        console.log('Calculate...')
        setCount(prev => prev + 1)
    }

    return (
        <>
            <div className='group'>
                <h1 className='text-center'>Count: {count}</h1>
                <div>
                    <button className='btn btn-success' onClick={inc}>Add</button>
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Dec</button>
                    <button className='btn btn-danger' onClick={() => setCount(0)}>Remove</button>
                </div>
                <pre>{JSON.stringify(state, null, 2)}</pre>
                {/*<h1>{state.map(state => state.text)}</h1>*/}
            </div>
        </>
    );
}

export default UseState;