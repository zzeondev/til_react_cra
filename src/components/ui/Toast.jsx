import styled from "@emotion/styled";
import React from "react";

function Toast({ message = "Please Message", bg = "#ccc" }) {
  // js 자리
  const StyledToast = styled.div`
    z-index: 999999;
    position: fixed;
    bottom: 120px;
    right: 120px;
    background-color: ${props => props.bg};
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;

  // jsx 자리
  return <StyledToast bg={bg}>{message}</StyledToast>;
}

export default Toast;
