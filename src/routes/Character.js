import React, { useState } from "react";

function Character() {
    const [level, setLevel] = useState(1);
    const characters = [
        {
            id: 1,
            name: "도톨이",
            height: 1,
        },
        {
            id: 2,
            name: "병뚜껑",
            height: 3,
        },
        {
            id: 3,
            name: "왕귤",
            height: 6,
        },
        {
            id: 4,
            name: "머그컵",
            height: 10,
        },
        {
            id: 5,
            name: "복숭아",
            height: 15,
        },
        {
            id: 6,
            name: "찐고구마",
            height: 20,
        },
        {
            id: 7,
            name: "식빵이",
            height: 25,
        },
        {
            id: 8,
            name: "아이패드",
            height: 30,
        },
    ];
    const levels = [
        "1단계(1~30cm)",
        "2단계(33~60cm)",
        "3단계(65~100cm)",
        "4단계(105~150cm)",
        "5단계(155~200cm)",
    ];

    const onPrevClick = (e) => {
        e.preventDefault();

        setLevel((prev) => (prev <= 1 ? 1 : prev - 1));
        console.log(level);
    };

    const onNextClick = (e) => {
        e.preventDefault();

        setLevel((prev) => (prev >= 5 ? 5 : prev + 1));
        console.log(level);
    };

    return (
        <div className="container">
            <div>나의 캐릭터</div>
            <div>캐릭터 그림</div>
            <button>캐릭터 스토리 보기</button>
            <div>나의 북적 리스트</div>
            {level > 1 && <span onClick={onPrevClick}>← </span>}
            <span>{levels[level - 1]}</span>
            {level < 5 && <span onClick={onNextClick}> →</span>}
            {level === 1 ? (
                <div>
                    {characters.map((char) => (
                        <div key={char.id}>
                            <div>{char.name}</div>
                            <div>image</div>
                            <div>{char.height}cm</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div>레벨이 아직 잠겨있어요!</div>
                    <div>북적이 상점에서 오픈해주세요</div>
                    <div>북적이 상점 가기</div>
                </div>
            )}
        </div>
    );
}

export default Character;
