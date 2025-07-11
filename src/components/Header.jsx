import React from "react";
import BgObjRed, { BgObj } from "./bg";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
