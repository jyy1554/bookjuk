import React, { useState } from "react";
import { authService } from "../fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
    <div className="authContainer">
      <h1>Login</h1>
      <span>환영합니다 :&#41;</span>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <input type="submit" value="Login" className="authInput authSubmit" />
      </form>
      <span className="authSpan">Forgot your password?</span>
      <span>Login With</span>
      <div className="authBtns">
        <button onClick={onSocialClick} name="facebook" className="authBtn">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </button>
        <button onClick={onSocialClick} name="google" className="authBtn">
          <FontAwesomeIcon icon={faGoogle} size="3x" />
        </button>
      </div>
      <div>
        <span>Don't have account? Sign Up</span>
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

export default Auth;
