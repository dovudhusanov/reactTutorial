const initialState = {value: 1, name: "developer"}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            }
        case "DECREMENT":
            return{
                ...state,
                value: state.value - 1
            }
        case "REMOVE":
            return {
                value: state.value = 0
            }
        default:
            return state
    }
}

export default reducer