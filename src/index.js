import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/core.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//개발 환경에선 프록시 서버 쪽으로 요청하고, 프로덕션에선 실제 API 서버로 요청
//API 도메인이 실서비스의 도메인과 달라 추가해줌
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "https://www.aladin.co.kr";
