import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseRefTask from "./HookTask/UseRefTask";
import UseMemo from "./useMemo";
import UseCallback from "./UseCallback";
import {UseContext} from "./useContext";
import MainContext from "./UseContextFolder/MainContext";


function Hook() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className='group'>
                    {/*<UseState />*/}
                    {/*<UseEffect />*/}
                    {/*<UseRef />*/}
                    {/*<UseRefTask />*/}
                    {/* <UseMemo />*/}
                    {/*<UseCallback />*/}
                    {/*<UseContext />*/}
                    <MainContext />
                </div>
            </div>
            {/*<UseRefTask />*/}
        </>
    );
}

export default Hook