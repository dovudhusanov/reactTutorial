import React from 'react';
import {useSelector} from "react-redux";

function TodosFooter(props) {
    const todosItems = useSelector(state => state.todos)

    const handleTodoSave = () => {
        localStorage.setItem('todos', JSON.stringify(todosItems))
    }

    return (
        <div className="card-footer">
            <button className='btn btn-primary' onClick={handleTodoSave}>Save</button>
        </div>
    );
}

export default TodosFooter;