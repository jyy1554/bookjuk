import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { authService } from "../fbase";
import { onAuthStateChanged } from "firebase/auth";
import { dbService } from "../fbase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        onAuthStateChanged(authService, (user) => {
            if (user) {
                // User is signed in
                setUserObj(user);
            } else {
                // User is signed out
                setUserObj(null);
            }
            setInit(true);
        });

        // 저장된 책목록 가져오기
        const q = query(
            collection(dbService, "books"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const bookArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBooks(bookArray);
        });
    }, []);

    return (
        <div>
            {init ? (
                <AppRouter
                    isLoggedIn={Boolean(userObj)}
                    userObj={userObj}
                    books={books}
                />
            ) : (
                "Initializing..."
            )}
        </div>
    );
}

export default App;
