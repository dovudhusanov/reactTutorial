import React, {useEffect} from 'react';
import TodosHeader from "./ReduxComponent/TodosHeader";
import TodosFooter from "./ReduxComponent/TodosFooter";
import TodoForm from "./ReduxComponent/TodoForm";
import TodoItem from "./ReduxComponent/TodoItem";
import TodoItems from "./ReduxComponent/TodoItems";
import {useDispatch, useSelector} from "react-redux";
import todos from "./reducers/todos";
import {initializeStore} from "./action/todos";

function ReduxApp(props) {

    const todoItems = useSelector(state => state.todos);
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(initializeStore(JSON.parse(localStorage.getItem('todos'))))
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-5">
                            <TodosHeader length={todoItems.length}/>
                            <TodoForm />
                            <TodoItems />
                            <TodosFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReduxApp;