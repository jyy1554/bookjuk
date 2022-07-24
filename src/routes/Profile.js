import React, { useState } from "react";
import { authService } from "../fbase";
import { signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile({ userObj }) {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [editing, setEditing] = useState(false);

  const onLogOutClick = () => {
    signOut(authService);
    navigate("/");
  };

  const onChange = (e) => {
    const { value } = e.target;
    setNewDisplayName(value);
  };

  return (
    <div className="container">
      <div>프로필</div>
      <div>Y</div>
      <div>{userObj.displayName}</div>
      <div>프로필 변경하기</div>
      <span onClick={onLogOutClick}>로그아웃</span>
    </div>
  );
}

export default Profile;
