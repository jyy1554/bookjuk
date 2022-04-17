import React, { useState } from "react";
import { authService } from "../fbase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
} from "firebase/auth";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            //Login
            const user = await signInWithEmailAndPassword(
                authService,
                email,
                password
            );
            console.log(user); //회원가입은 createUserWithEmailAndPassword
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    };

    const onSocialClick = async (e) => {
        const { name } = e.target;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new FacebookAuthProvider();
        }
        await signInWithPopup(authService, provider);
    };

    return (
        <div>
            <div>로그인</div>
            <div>캐릭터</div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value="이메일로 로그인" />
            </form>
            <div>비밀번호를 잊으셨나요?</div>
            <span>다음 계정으로 로그인</span>
            <div>
                <button onClick={onSocialClick} name="facebook">
                    Facebook
                </button>
                <button onClick={onSocialClick} name="google">
                    Google
                </button>
            </div>
            <div>
                <span>계정이 없으신가요?</span>
                <span>회원가입</span>
            </div>
            {error && <span>{error}</span>}
        </div>
    );
}

export default Auth;
