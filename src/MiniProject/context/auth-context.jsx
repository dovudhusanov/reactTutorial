import {createContext,useState} from "react";
import axios from "../../api/Auth";

// if(!localStorage.getItem("user")){
//     localStorage.setItem("user",null)
// }
const initialState = {
    token: JSON.parse(localStorage.getItem("user")) || null,
    error: false,
    isFetching: false
}



const LOGIN_URL = "/api/auth/login";

export const AuthContext2 = createContext(initialState)

export const AuthContextProvider = ({children}) => {
    const [state, setState] = useState(initialState)
    const [status, setStatus] = useState("")

    async function Login(values) {
            await axios.post(LOGIN_URL, values).then((response) => {
                if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data.token))
                setState({...state, token: JSON.parse(localStorage.getItem("user")), isFetching: true,})
                setStatus(response.data.status)
            }
        }).catch((e) => {
            setState({...state, token: null, isFetching: false, error: true})
            setStatus(e.response.data.status)
        })
    }

    async function Logout() {
        localStorage.removeItem("user")
        setState({...state, token: null, isFetching: false, error: false})
    }

    const value = {
        status, state, Login, Logout
    }

    return (
        <AuthContext2.Provider value={value}>
            {children}
        </AuthContext2.Provider>
    )
}