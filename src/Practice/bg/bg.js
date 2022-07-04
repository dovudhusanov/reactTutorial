import React, {useState} from 'react';
import './sty.css'

function LocalStorage(props) {

    const [count, setCount] = useState(0)
    const [colored, setColored] = useState(false)

    function func() {
        // const btn = document.querySelector('button')
        document.body.classList.toggle('active')
        setCount(prevState => prevState + 1)
        setColored(prevState => !prevState)
    }

    // const style = () => {
    //     return colored ? 'text-success' : 'text-white'
    // }

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div>
                <h1 className='text-white h11'>{count}</h1>
                <button onClick={func}
                        className='btn btn-success'
                >
                    Click
                </button>
            </div>
        </div>
    );
}

export default LocalStorage;