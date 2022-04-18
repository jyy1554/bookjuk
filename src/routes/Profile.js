import React from "react";
import { authService } from "../fbase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile({ userObj }) {
    const navigate = useNavigate();

    const onLogOutClick = () => {
        signOut(authService);
        navigate("/");
    };

    return (
        <div className="container">
            <div>프로필</div>
            <div>Y</div>
            <div>닉네임</div>
            <div>프로필 변경하기</div>
            <div>독서기록 내보내기</div>
            <div>컬러 테마 설정</div>
            <span onClick={onLogOutClick}>로그아웃</span>
        </div>
    );
}

export default Profile;
