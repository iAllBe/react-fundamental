import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context/context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

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