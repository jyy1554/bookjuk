import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BookResult({ bookname }) {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchBook = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    //package.json에서 proxy 설정 이미 해줌. CORS 설정 위해
                    `/ttb/api/ItemSearch.aspx?ttbkey=${process.env.REACT_APP_TTB_KEY}&Query=${bookname}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
                );
                setBooks(response.data.item);
                console.log(response.data.item);
            } catch (e) {
                setError(e);
                console.log(e);
            }
            setLoading(false);
        };
        searchBook();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;

    return (
        <div>
            {books && (
                <ul>
                    {books.map((book) => (
                        <li key={book.itemId}>
                            <Link to={`/detail/${book.isbn13}`}>
                                <div>
                                    <img alt="책표지" src={book.cover} />
                                    <div>{book.title}</div>
                                    <div>{book.author}</div>
                                    <span>{book.description}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookResult;
