import React from "react";
import { Link } from "react-router-dom";

function Library({ books }) {
    return (
        <div className="container">
            <div>나의 서재</div>
            <ul>
                <li>전체</li>
                <li>읽은 책</li>
                <li>읽고 있는 책</li>
                <li>읽고 싶은 책</li>
            </ul>
            <ul>
                {books.map((book, i) => (
                    <div key={book.id}>
                        <Link
                            to={`/detail/${book.isbn13}/${book.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <>
                                <img alt="책표지" src={book.cover} />
                                <div>
                                    {book.title.length > 14
                                        ? `${book.title.substr(0, 13)}...`
                                        : `${book.title}`}
                                </div>
                                <div>
                                    {book.author.length > 20
                                        ? `${book.author.substr(0, 19)}...`
                                        : `${book.author}`}
                                </div>
                            </>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Library;
