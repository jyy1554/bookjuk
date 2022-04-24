import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "../fbase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Home({ userObj }) {
    const [books, setBooks] = useState([]);
    const [stack, setStack] = useState(true); // true : 쌓아보기, false: 리스트형 보기
    const edit = "edit";

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

    const onClick = (e) => {
        e.preventDefault();

        const { value } = e.target;
        if (value === "stack") {
            setStack(true);
        } else if (value === "list") {
            setStack(false);
        }
    };

    return (
        <div className="container">
            <Link to="/search">책 검색하기</Link>
            <div>전체보기 ({books.length})</div>
            <button value="stack" onClick={onClick}>
                쌓아보기
            </button>
            <button value="list" onClick={onClick}>
                리스트형 보기
            </button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/detail/${book.isbn13}/${book.id}`}>
                            {stack ? (
                                <>{book.title}</>
                            ) : (
                                <>
                                    <img alt="책표지" src={book.cover} />
                                    {book.title}
                                    {book.author}
                                </>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
