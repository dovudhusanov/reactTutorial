import React, {createContext, useEffect, useState} from "react"
import firebases from "./firebase/config";



export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        firebases.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false)
        })
    })

    if(loading) return <h3>Loading...</h3>

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
