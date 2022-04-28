import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookShape from "../components/BookShape";

function Home({ userObj, books }) {
    const [stack, setStack] = useState(true); // true : 쌓아보기, false: 리스트형 보기

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
            <div>북적이(0.45cm)</div>
            <div>북적이</div>
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
                                    <div>
                                        {book.title.length > 6
                                            ? `${book.title.substr(0, 5)}...`
                                            : `${book.title}`}
                                    </div>
                                    <div>
                                        {book.author.length > 9
                                            ? `${book.author.substr(0, 8)}...`
                                            : `${book.author}`}
                                    </div>
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
