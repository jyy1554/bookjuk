import React from "react";

function BookDetail({ book }) {
    return (
        <div>
            <div>{book.title}</div>
            <img alt="bookcover" src={book.cover} />
            <div>{book.author}</div>
            <div>책 소개</div>
            <div>{book.description}</div>
            <div>출판사</div>
            <div>{book.publisher}</div>
            <div>ISBN</div>
            <div>
                {book.isbn} {book.isbn13}
            </div>
            <div>페이지 수</div>
            <div>{book.publisher}</div>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
                자세히 보기
            </a>
        </div>
    );
}

export default BookDetail;
