import React, {useState} from 'react';
import './Hook.css'

function UseState(props) {

    function RandomNum () {
        return Math.trunc(Math.random() * 20)
    }

    const [count, setCount] = useState(RandomNum())
    function inc() {
        console.log('Calculate...')
        setCount(prev => prev + 1)
    }

    return (
        <div className=' container d-flex justify-content-center mt-5'>
            <div className='group'>
                <h1 className='text-center'>Count: {count}</h1>
                <div>
                    <button className='btn btn-success' onClick={inc}>Add</button>
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Dec</button>
                    <button className='btn btn-danger' onClick={() => setCount(0)}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default UseState;