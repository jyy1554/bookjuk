import React, { useState } from "react";
import BookResult from "../components/BookResult";
import { useNavigate } from "react-router-dom";

function BookSearch() {
    const [bookname, setBookname] = useState("");
    const [search, setSearch] = useState(false);
    const navigate = useNavigate();

    const onChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setBookname(value);
    };

    const onSubmit = async (e) => {
        if (bookname === "") {
            setSearch(false);
            return;
        }
        e.preventDefault();
        setSearch(true);
    };

    return (
        <div className="container">
            <div
                onClick={() => {
                    navigate(-1);
                }}
            >
                뒤로가기
            </div>
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
