import React from "react";
import BookSearch from "../components/BookSearch";

function Home() {
    return (
        <div className="container">
            <BookSearch />
            <div>2021년 (10)</div>
            <button>쌓아보기</button>
            <button>리스트형 보기</button>
            <div>책책책</div>
        </div>
    );
}

export default Home;
