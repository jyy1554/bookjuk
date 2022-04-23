import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../fbase";
import BookResult from "../components/BookResult";

function BookSearch({ userObj }) {
    const [bookname, setBookname] = useState("");
    const [search, setSearch] = useState(false);

    const onChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setBookname(value);
    };

    const onSubmit = async (e) => {
        setSearch(false);
        if (bookname === "") {
            return;
        }
        e.preventDefault();

        const bookObj = {
            bookname: bookname,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        };
        await addDoc(collection(dbService, "books"), bookObj);
        setSearch(true);
    };

    return (
        <div className="container">
            <Link to="/">뒤로가기</Link>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="어떤 책을 읽으셨나요?"
                    value={bookname}
                    onChange={onChange}
                />
            </form>
            {search && <BookResult bookname={bookname} />}
        </div>
    );
}

export default BookSearch;
