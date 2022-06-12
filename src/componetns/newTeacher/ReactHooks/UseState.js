import React, {useState} from 'react';
import './Hook.css'

function UseState(props) {

    const [count, setCount] = useState(0)

    return (
        <div className=' container d-flex justify-content-center mt-5'>
            <div className='group'>
                <h1 className='text-center'>Count: {count}</h1>
                <div>
                    <button className='btn btn-success' onClick={() => setCount(count + 1)}>Add</button>
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default UseState;