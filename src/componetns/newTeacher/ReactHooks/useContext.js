import React, {useState} from 'react';
import MainUseContext from "./MainUseContext";
import AlertUseContext from "./AlertUseContext";

const AlertContext = React.createContext({
    alert: false
});

export function UseContext({children}) {
    const style = {
        color: 'white'
    }
    const [alert, setAlert] = useState(false)
    const toggleAlert = () => setAlert((prevState) => !prevState)

    return (
        <AlertContext.Provider value={alert}>
            <div style={style}>
                <AlertUseContext/>
                <MainUseContext toggle={toggleAlert}/>
            </div>
        </AlertContext.Provider>
    );
}

export default AlertContext;