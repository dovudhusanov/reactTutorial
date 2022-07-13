import React from 'react';
import TodoList from "./Todo/TodoList";
import './MainPageSBBR.css'

function MainPageSbbr(props) {

    const todos = [
        {id: 1, completed: true, title: 'ReactJS' },
        {id: 2, completed: false, title: 'VueJS' },
        {id: 3, completed: true, title: 'MongoDB' },
        {id: 4, completed: true, title: 'Angular' },
        {id: 5, completed: false, title: 'NodeJS' },
    ]

    return (
        <div className='wrapper'>
            <h1>React Tutorial</h1>
            <TodoList todos={todos} />
        </div>
    );
}

export default MainPageSbbr;