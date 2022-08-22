import {TODO} from "../Constants/todo";
import todos from "../reducers/todos";

export const addTodo = (todoItem) => {
    return {
        type: TODO.ADD_TODO,
        payload: {
            ...todoItem
        }
    }
};

export const removeTodo = (id) => {
    return {
        type: TODO.REMOVE_TODO,
        payload: {
            id
        }
    }
}

export const markTodoDone = (todoItem) => {
    return {
        type: TODO.MARK_TODO_DONE,
        payload: {
            ...todoItem
        }
    }
}

export const initializeStore = (todos) => {
    return{
        type: TODO.INITIALIZE_STORE,
        payload: todos
    }
}