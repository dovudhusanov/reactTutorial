import React from 'react';
import {useDispatch} from "react-redux";
import {initializeStore, markTodoDone, removeTodo} from "../action/todos";
import {toast} from "react-toastify";

function TodoItem({title, id, isDone}) {

    const dispatch = useDispatch()

    function removeContent() {
        dispatch(removeTodo(id))
        dispatch(initializeStore(JSON.parse(localStorage.getItem('todos'))))
        toast.success("Content successfully removed")
    }

    const handleMarkTodo = (e) => {
        dispatch(
            markTodoDone({
                    id,
                    title,
                    isDone: e.target.checked
                }
            )
        )
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="flexCheckDefault"
                    onChange={handleMarkTodo}
                />
                <span style={{textDecorationLine: isDone ? "line-through" : "none"}}>{title}</span>
            </div>
            <button className="btn btn-danger" onClick={removeContent}>Remove</button>
        </li>
    );
}

export default TodoItem;