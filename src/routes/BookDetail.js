import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../fbase";

function BookDetail({ userObj }) {
    const { isbn13 } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const showBookDetail = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `/ttb/api/ItemLookUp.aspx?ttbkey=${process.env.REACT_APP_TTB_KEY}&itemIdType=ISBN13&ItemId=${isbn13}&output=js&Version=20131101`
                );
                setBook(response.data.item[0]);
                console.log(response.data.item[0]);
            } catch (e) {
                setError(e);
                console.log(e);
            }
            setLoading(false);
        };
        showBookDetail();
    }, []);

    const onClick = async (e) => {
        e.preventDefault();

        const bookObj = {
            title: book.title,
            isbn13: book.isbn13,
            pageNum: book.subInfo.itemPage,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        };
        await addDoc(collection(dbService, "books"), bookObj);
        console.log("저장 완료!");
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;

    return (
        <div>
            {book && (
                <div>
                    <div
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        뒤로가기
                    </div>
                    <button onClick={onClick}>저장</button>
                    <div>{book.title}</div>
                    <img alt="책표지" src={book.cover} />
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
                    <div>{book.subInfo.itemPage}</div>
                    <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        자세히 보기
                    </a>
                </div>
            )}
        </div>
    );
}

export default BookDetail;
