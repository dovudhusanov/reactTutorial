import React, {useEffect, useState} from 'react';

function LocalStorage(props) {

    const [item, setItem] = useState("")

    const addItem = () => {
      localStorage.setItem('Text', item)
    }

    const removeItem = () => {
      localStorage.removeItem('Text')
    }

    const clear = () => {
      localStorage.clear()
    }

    return (
        <div className='m-3'>
            <input
                className='form-control w-25'
                type="text"
                placeholder='Typing...'
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />

            <button
                onClick={addItem}
                className='btn btn-success'
            >
                Add Item
            </button>
            <button onClick={removeItem}
                className='btn btn-danger'
            >remove</button>
            <button
                onClick={clear}
                className='btn btn-outline-danger'
            >
                clear
            </button>
            {localStorage.getItem('Text' ) && (
                <div>
                    Item: <p>{localStorage.getItem("Text")}</p>
                </div>
            )}

        </div>
    );
}

export default LocalStorage;