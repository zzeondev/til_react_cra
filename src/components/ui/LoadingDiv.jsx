import styled from "@emotion/styled";
import React from "react";
import { GridLoader } from "react-spinners";
// 전역(window) 자리
const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingDiv() {
  // js 자리

  // jsx 자리
  return (
    <Loading>
      <GridLoader color="#006e81" />
    </Loading>
  );
}

export default LoadingDiv;
