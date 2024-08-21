import React from 'react';
import {publicRoutes} from "../utils/routes/routes";
import NotFound from "./notFound/NotFound";
import {Route, Routes} from "react-router-dom";


const AppRouter:React.FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;