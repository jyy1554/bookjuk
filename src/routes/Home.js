import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "../fbase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Home({ userObj }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
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
        <div className="container">
            <Link to="/search">책 검색하기</Link>
            <div>2022년 ({books.length})</div>
            <button>쌓아보기</button>
            <button>리스트형 보기</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/detail/${book.isbn13}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
