import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import App from "./App";
import Todo from "./pages/todo/Todo";
import Index from "./pages/todo/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <Index />
  </div>,
);
