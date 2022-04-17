import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <Link to="/search">책 검색하기</Link>
            <div>2021년 (10)</div>
            <button>쌓아보기</button>
            <button>리스트형 보기</button>
            <div>책책책</div>
        </div>
    );
}

export default Home;
