import React from 'react';

function TodoItem({todos, index}) {
    return (
        <>
            <li>{index + 1} {todos.completed} {todos.title}</li>
        </>
    );
}

export default TodoItem;