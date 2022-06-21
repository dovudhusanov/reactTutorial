import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseRefTask from "./HookTask/UseRefTask";
import UseMemo from "./useMemo";


function Hook() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className='group'>
                    {/*<UseState />*/}
                    {/*<UseEffect />*/}
                    {/*<UseRef />*/}
                    {/*<UseRefTask />*/}
                     <UseMemo />
                </div>
            </div>
            {/*<UseRefTask />*/}
        </>
    );
}

export default Hook