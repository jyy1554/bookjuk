import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
