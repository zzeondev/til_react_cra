import React from "react";
// css
// import "../css/StartPage.css"
// import styles from "../css/StartPage.module.css";
import styles from "./StartPage.module.scss";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <div className={styles.wrap}>
      {/* <div className={styles.box}>로고</div> */}
      {/* 헤더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컴포넌트 */}
      {/* 공지 컴포넌트 */}
      {/* 추천 컴포넌트 */}
      {/* 새목록 컴포넌트 */}
      {/* 앱설치 안내 컴포넌트 */}
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </div>
  );
}

export default StartPage;
