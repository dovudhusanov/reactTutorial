import React, {useContext} from 'react';
import {privateRoutes, publicRoutes} from "../Route/Router";
import {Route, Routes} from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Error from "./Error";
import {AuthContext} from "../ContextNew";
import PropsTutorial from "../PropsTutorial";

function AppRouter(props) {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(privateRoutes => (
                        <Route
                            path={privateRoutes.path}
                            element={privateRoutes.component}
                            exact={privateRoutes.exact}
                        />
                    ))
                :  publicRoutes.map(privateRoutes => {
                        <Route
                            path={privateRoutes.path}
                            element={privateRoutes.component}
                            exact={privateRoutes.exact}
                        />
                    })}
            {isAuth
                ? <Route
                    path='/login'
                    element={<PropsTutorial />}
                />
                :<Route
                    path='*'
                    element={<SignIn/>}
                />
            }
        </Routes>
    );
}

export default AppRouter;