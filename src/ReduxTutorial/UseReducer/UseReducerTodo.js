import React from 'react';

function UseReducerTodo({items, dispatch}) {
    return (
        <>
            <li className='mt-3 w-50 list-group-item d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <input className="form-check-input mx-2" type="checkbox" onClick={() => dispatch({type: "toggle", payload: {id: items.id}})} />
                    <span style={{textDecorationLine: items.completed ? "line-through" : "none", fontSize: "20px", paddingBottom: "1px"}}>{items.name}</span>
                </div>
                <div>
                    <button className='btn btn-danger'
                            onClick={() => dispatch({type: "delete", payload: {id: items.id}})}>delete
                    </button>
                </div>
            </li>

        </>
    );
}

export default UseReducerTodo;