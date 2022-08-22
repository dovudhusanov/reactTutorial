import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

function TodoItems() {

    const todos = useSelector(state => state.todos)

    return (
        <ul className="list-group list-group-flush">
            {
                todos.length > 0
                    ? todos.map(({title, id, isDone}) => <TodoItem
                        title={title}
                        key={id}
                        id={id}
                        isDone={isDone}
                    />)
                    : <h4
                        className='
                        text-center
                        text-danger
                        my-3'
                    >Todos not created yet</h4>
            }
        </ul>
    );
}

export default TodoItems;