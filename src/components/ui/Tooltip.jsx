import styled from "@emotion/styled";
import React from "react";

function Tooltip({ children, text }) {
  // js 자리
  const TooltipWrap = styled.div`
    position: relative;
    display: inline-block;

    &:hover .bubble {
      visibility: visible;
      opacity: 1;
    }
  `;

  const TooltipBubble = styled.div`
    position: absolute;
    left: 50%;
    bottom: 120%;
    transform: translateX(-50%);
    white-space: nowrap;
    background-color: #333;
    color: #fff;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `;
  // jsx 자리
  return (
    <TooltipWrap>
      {children}
      <TooltipBubble className="bubble">{text}</TooltipBubble>
    </TooltipWrap>
  );
}

export default Tooltip;
