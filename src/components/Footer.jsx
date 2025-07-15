import React from "react";
import { Link } from "react-router-dom";

function Footer({ children }) {
  return (
    <footer>
      <Link to="/">👀홈</Link>
      카피라이터
      {children}
    </footer>
  );
}

export default Footer;
