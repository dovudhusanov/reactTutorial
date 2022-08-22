import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid'
import {addTodo} from "../action/todos";
import {toast, ToastContainer} from "react-toastify";

function TodoForm(props) {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') {
            toast.error("Please input the info")
        } else {
            dispatch(addTodo({
                title: inputRef.current.value,
                id: uuidv4(),
                isDone: false
            }))
            inputRef.current.value = ''
            toast.success("info successfully added")
        }
    };

    return (
        <div className="card-body">
            <form className="mb-3 d-flex justify-content-between align-items-center" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="write text"
                        ref={inputRef}
                    />
                </div>
                <button
                    className='btn btn-success mt-2'
                >Add
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default TodoForm;