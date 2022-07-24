import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Navigation from "../components/Navigation";
import Home from "../routes/Home";
import Library from "../routes/Library";
import Profile from "../routes/Profile";
import BookSearch from "../components/BookSearch";
import BookDetail from "../components/BookDetail";

function AppRouter({ isLoggedIn, userObj, books }) {
  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home userObj={userObj} books={books} />} />
          <Route path="/library" element={<Library books={books} />} />
          <Route path="/profile" element={<Profile userObj={userObj} />} />
          <Route path="/search" element={<BookSearch />} />
          <Route
            path="/detail/:isbn13"
            element={<BookDetail userObj={userObj} />}
          />
          <Route
            path="/detail/:isbn13/:id"
            element={<BookDetail userObj={userObj} />}
          />
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
