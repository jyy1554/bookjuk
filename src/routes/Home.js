import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "../fbase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import BookShape from "../components/BookShape";

function Home({ userObj }) {
    const [books, setBooks] = useState([]);
    const [stack, setStack] = useState(true); // true : 쌓아보기, false: 리스트형 보기

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
                {books.map((book, i) => (
                    <div key={book.id}>
                        <Link
                            to={`/detail/${book.isbn13}/${book.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            {stack ? (
                                <BookShape
                                    title={book.title}
                                    pageNum={book.pageNum}
                                    index={i}
                                />
                            ) : (
                                <>
                                    <img alt="책표지" src={book.cover} />
                                    {book.title}
                                    {book.author}
                                </>
                            )}
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;
