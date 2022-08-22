import React, {useState, useReducer} from 'react';
import UseReducerTodo from "./UseReducerTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UseReducer(props) {
    // // const [state, setState] = useState(0);
    //
    // const reducer = (state, action) => {
    //   switch (action.type) {
    //       case "INCREMENT": return state + 1;
    //       case "DECREMENT": return state - 1;
    //       default: return   state
    //   }
    // }
    //
    // const [count, dispatch] = useReducer(reducer, 0)
    // // const [name, setName] = useState('Dovudxon')
    //
    // // const funcName = () => {
    // //   setName("Developer")
    // // }
    // // function increment() {
    // //     setState(prevState => prevState + 1)
    // // }
    // // function decrement() {
    // //     setState(prevState => prevState - 1)
    // // }
    //
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case "ADD":
    //             return [...state, {
    //                 id: Date.now(),
    //                 name: action.payload.name,
    //                 completed: false
    //             }]
    //         default:
    //             return state
    //     }
    // }
    //
    // const [name,  setName] = useState('')
    // const [todos, dispatch] = useReducer(reducer, [])
    //
    // const handleSubmit = () => {
    //     if(name === '') {
    //         alert("Please input the info")
    //     } else {
    //         dispatch({type: "ADD", payload: {name: name}})
    //         setName('')
    //     }
    // }
    //
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case "increment":
    //             return (
    //                 state + action.payload
    //             );
    //         case "decrement":
    //             return state - action.payload;
    //         default:
    //             return state
    //     }
    // }
    //
    //
    //
    // const [count, dispatch] = useReducer(reducer, 0)
    // const [countPay, setCountPay] = useState(5)
    //
    // const increment = () => {
    //     dispatch({type: 'increment', payload: countPay})
    // }
    // const decrement = () => {
    //     dispatch({type: 'decrement', payload: countPay})
    // }

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, {
                    id: Date.now(),
                    name: action.payload.name,
                    completed: false,
                }]
            case "toggle":
                return state.map((items) => {
                    if (items.id === action.payload.id) {
                        return {...items, completed: !items.completed}
                    }
                    return items
                })

            case "delete":
                return state.filter((items) => items.id !== action.payload.id)
            default:
                return state
        }
    }

    const [value, setValue] = useState('')
    const [arr, dispatch] = useReducer(reducer, [])

    const handleSubmit = () => {
        if (value === "") {
            toast.error("Please input the info!", 'warn')
        } else {
            dispatch({type: 'ADD', payload: {name: value}})
            setValue("")
            toast.success("Info success added!")
        }
    }

    return (
        <div className='container mt-5'>
            {/*<button className="btn btn-primary"*/}
            {/*        onClick={increment}*/}
            {/*>+*/}
            {/*</button>*/}
            {/*<span>{count}</span>*/}
            {/*<button className="btn btn-danger"*/}
            {/*       onClick={decrement}*/}
            {/*>-*/}
            {/*</button>*/}
            {/**/}
            {/*<button onClick={() => dispatch({type: "INCREMENT"})} className="btn btn-primary">+</button>*/}
            {/*<span>{count}</span>*/}
            {/*<button onClick={() => dispatch({type: "DECREMENT"})} className="btn btn-danger">-</button>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    className='form-control w-50'*/}
            {/*    placeholder='write info'*/}
            {/*    value={name}*/}
            {/*    onChange={e => setName(e.target.value)}*/}
            {/*/>*/}
            {/*<button*/}
            {/*    className="btn btn-success mt-2"*/}
            {/*    onClick={handleSubmit}*/}
            {/*>Submit</button>*/}

            {/*{*/}
            {/*   todos.map((item) => {*/}
            {/*       return <UseReducerTodo items={item}/>*/}
            {/*   })*/}
            {/*}*/}
            <div>
                <div className='d-flex align-items-center w-25 mb-5' style={{height: "50px"}}>
                    <input
                        className='form-control'
                        style={{height: "100%"}}
                        type="text"
                        placeholder='write info'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className='btn btn-success' style={{height: "100%"}} onClick={handleSubmit}>Submit</button>
                    <ToastContainer/>
                </div>
                {
                    arr.map((value) => {
                        return <UseReducerTodo items={value} key={value.id} dispatch={dispatch}/>
                    })
                }
            </div>
        </div>
    );
}

export default UseReducer;