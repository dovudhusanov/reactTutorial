import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";


function Hook() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className='group'>
                    {/*<UseState />*/}
                    <UseEffect />
                </div>
            </div>
        </>
    );
}

export default Hook