import React from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(r =>
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