import React, { useEffect, useState } from "react";
import axios from "axios";
import BookDetail from "../routes/BookDetail";

function BookResult({ bookname, history }) {
    const [books, setBooks] = useState(null);
    const [book, setBook] = useState(null);
    const [bookClick, setBookClick] = useState(false);
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
            {bookClick ? (
                <div>
                    <BookDetail book={book} />
                </div>
            ) : (
                <div>
                    {books && (
                        <ul>
                            {books.map((book) => (
                                <li
                                    key={book.itemId}
                                    onClick={() => {
                                        setBook(book);
                                        setBookClick(true);
                                    }}
                                >
                                    <img alt="bookcover" src={book.cover} />
                                    <div>{book.title}</div>
                                    <div>{book.author}</div>
                                    <span>{book.description}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default BookResult;
