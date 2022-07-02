import React, {useContext} from 'react';
import AlertContext from "./useContext";

function AlertUseContext(props) {

    const alert = useContext(AlertContext)
    if  (!alert) return null
я
    return (
        <div className='bg-danger p-3 text-center align-middle my-4' style={{animation: '0.5s ease'}}>
            <h5>This is message very important</h5>
        </div>
    );
}

export default AlertUseContext;