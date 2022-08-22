import {TODO} from "../Constants/todo";
const initialSate = [];

const todos = (state = initialSate, action) => {
    switch (action.type) {
        case TODO.ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case TODO.REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id)
        case TODO.MARK_TODO_DONE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone
                    }
                }else {
                    return item
                }
            })
        case TODO.INITIALIZE_STORE:
            return action.payload
        default:
            return state
    }
};

export default todos;