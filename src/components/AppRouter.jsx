import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(r =>
                    <Route
                        key={r.path}
                        path={r.path}
                        element={r.element}
                        exact={r.exact}
                    />
                )
                : publicRoutes.map(r =>
                    <Route
                        key={r.path}
                        path={r.path}
                        element={r.element}
                        exact={r.exact}
                    />
                )}
        </Routes>
    );
};

export default AppRouter;