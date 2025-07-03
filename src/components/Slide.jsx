import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
function Slide() {
  // js 자리

  // Emotion 관련
  // 기본형
  const BasicButton = styled.button``;
  // css 추가형
  const BasicUpButton = styled.button`
    background-color: yellowgreen;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    /* SCSS 적용 가능 */
    transition: all 0.5s;
    &:hover {
      background-color: skyblue;
    }
  `;
  // props 로 동적인 즉, 실시간으로 변경하기
  const Box = styled.div`
    background-color: ${props => props.bg};
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <BasicButton>기본버튼</BasicButton>
      <br />
      <br />
      <BasicUpButton>CSS적용버튼</BasicUpButton>
      <br />
      <br />
      <Box bg="red" width="200px">
        첫번째 박스
      </Box>
      <Box bg="blue">두번째 박스</Box>
    </div>
  );
}

export default Slide;
