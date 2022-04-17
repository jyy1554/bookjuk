import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/library">Library</Link>
                </li>
                <li>
                    <Link to="/character">Character</Link>
                </li>
                <li>
                    <Link to="/review">Review</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
