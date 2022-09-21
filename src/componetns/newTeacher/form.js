import React, {useEffect, useState} from 'react';

function Form(props) {

    const [value, setValue] = useState('')
    const [valueNum, setValueNum] = useState(null)

    console.log(value)

    const handleSubmit = (e) => {
      e.preventDefault()
      let age = valueNum
      if (!Number(age)) {
          alert('Age must be entered with a number')
          setValueNum('')
      }else {
          alert(`[${value}] and [${valueNum}]'s forwarding`)
          setValue('')
          setValueNum('')
      }
    }

    let header = ''
    if  (value) {
        header = <>{`my name is ${value}`}</>
    } else {
        header = ''
    }
    let age = null
    if  (valueNum) {
        age = <>{`and i'm ${valueNum} years old.`}</>
    }else {
        age = null
    }

    return (
        <>
            <form
                className='m-5'
                onSubmit={handleSubmit}
            >
                <h1>Hello {header} {age}</h1>
                <p>Please input your name</p>
                <input
                    type="text"
                    placeholder='Input first name'
                    className='
                    form-control
                    mt-2
                    w-25
                 '
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder='Input age'
                    className='
                    form-control
                    mt-2
                    w-25
                 '
                    value={valueNum}
                    onChange={event => setValueNum(event.target.value)}
                    required
                />
                <button
                    type="submit"
                    value='submit'
                    className='
                    btn
                    btn-success
                    text-white
                    mt-2
                '
                >Submit</button>
            </form>
        <table className='table px-5'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{localStorage.getItem('name')}</td>
                    <td>{localStorage.getItem('age')}</td>
                </tr>
            </tbody>
        </table>
        </>
    );

}

export default Form;