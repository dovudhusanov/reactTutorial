import React, {useState} from 'react';

function Counter(props) {

    const [state, setState] = useState(0)

    return (
        <div className='text-center mt-5'>
            <h1 className={'text-center'}>Count: {state}</h1>
            <button
                className='btn btn-outline-success'
                onClick={() => setState(prevState => prevState + 1)}
            >Add
            </button>
            <button
                className='btn btn-outline-danger'
                onClick={() => setState(prevState => prevState - 1)}
            >Delete
            </button>
            <button
                className='btn btn-danger'
                onClick={() => setState(0)}
            >Remove
            </button>
        </div>
    );
}

export default Counter;