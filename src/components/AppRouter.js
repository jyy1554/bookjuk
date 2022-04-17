import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Navigation from "../components/Navigation";
import Home from "../routes/Home";
import Library from "../routes/Library";
import Character from "../routes/Character";
import Review from "../routes/Review";
import Profile from "../routes/Profile";

function AppRouter({ isLoggedIn, userObj }) {
    return (
        <Router>
            {isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/character" element={<Character />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Auth to="/" replace />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="*" element={<Auth to="/" replace />} />
                </Routes>
            )}
            {isLoggedIn && <Navigation />}
        </Router>
    );
}

export default AppRouter;
