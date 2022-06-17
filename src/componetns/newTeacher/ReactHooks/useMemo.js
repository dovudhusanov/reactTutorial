import React, {useEffect, useMemo, useState} from 'react';

function complete(num) {
    console.log('Completed...')
    let i = 0
    while (i < 10000000) i++;
    return num * 2
}

function UseMemo(props) {

    const [number, setNumber] = useState(8)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return  {
            color: colored ? "purple" : "black"
        };
    }, [colored])

    const computed = useMemo(() => {
        return complete(number)
    }, [number])

    useEffect(() => {
        alert("Rendering...")
    }, [styles])

    useEffect(() => {
        console.log('Styles was change...')
    }, [styles])

    return (
        <div>
            <h1 style={styles} className={'text-center'}>Amount: {computed}</h1>
            <button className='btn btn-success' onClick={() => setNumber(prevState => prevState + 1)}>Add</button>
            <button className='btn btn-danger' onClick={() => setNumber(prevState => prevState -  1)}>Delete</button>
            <button className='btn btn-secondary' onClick={() => setColored(prev => !prev)}>Edit</button>
        </div>
    );
}

export default UseMemo;