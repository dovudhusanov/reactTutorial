import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <TodoItem todos={todo} key={index + 1} index={index}/>
                )
            })}
        </ul>
    );
}

export default TodoList;