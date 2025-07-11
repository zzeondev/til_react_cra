import styled from "@emotion/styled";
import React from "react";

function ProgressBar({ percent = 0, color = "#000" }) {
  // js 자리
  const BarWrapper = styled.div`
    background-color: #eee;
    height: 16px;
    width: 100%;
    border-radius: 8px;
    margin: 10px 0;
    overflow: hidden;
  `;
  const BarInner = styled.div`
    height: 100%;
    background-color: ${props => props.color};
    width: ${props => props.percent}%;
    transition: all 0.5s;
  `;
  // jsx 자리
  return (
    <BarWrapper>
      <BarInner percent={percent} color={color} />
    </BarWrapper>
  );
}

export default ProgressBar;
