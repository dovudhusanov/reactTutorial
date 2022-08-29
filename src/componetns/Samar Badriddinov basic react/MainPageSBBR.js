import React, {useEffect, useState} from 'react';
import TodoList from "./Todo/TodoList";
import './MainPageSBBR.css'
import localStorage from "../locaStorage Praktika/LocalStorage";

function MainPageSbbr(props) {

    const [todos, setTodos] = useState([
        {id: 1, completed: true, title: 'ReactJS' },
        {id: 2, completed: false, title: 'VueJS' },
        {id: 3, completed: true, title: 'MongoDB' },
        {id: 4, completed: true, title: 'Angular' },
        {id: 5, completed: false, title: 'NodeJS' },
    ])

    const [value, setValue] = useState()

    function addFunc(e) {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                id: Date.now(), completed: true, title: value
            }
        ])
        setValue('')
        localStorage.setItem("todo", JSON.stringify(todos))
    }


    return (
        <div className='wrapper'>
            <h1>React Tutorial</h1>
            <TodoList todos={todos}/>
            <form onSubmit={addFunc}>
                <input type="text"
                       placeholder='technology'
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
                <button className='btn btn-primary' style={{color: "white !important"}}>Add</button>
            </form>
        </div>
    );
}

export default MainPageSbbr;