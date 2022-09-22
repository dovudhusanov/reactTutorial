import React from 'react';
import {UseContext} from "./componetns/newTeacher/ReactHooks/useContext";
import {AuthContext} from "./Auth";
import {BrowserRouter as Redirect, Route} from "react-router-dom";

function PrivateRoute({component: RouteComponent, ...rest}) {
    const {currentUser} = UseContext(AuthContext)

    return (
        <div>
            <Route
                {...rest}
                render={routerProps => {
                    !currentUser ? (
                        <RouteComponent {...routerProps} />
                    ) : (
                        <Redirect to={'/log-in'} />
                    )
                }}
            >

            </Route>
        </div>
    );
}

export default PrivateRoute;