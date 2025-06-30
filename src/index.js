import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
// 컴포넌트

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <StartPage></StartPage>
  </div>,
);
