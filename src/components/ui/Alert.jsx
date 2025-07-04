import styled from "@emotion/styled";
import React from "react";

function Alert({ children, type = "default" }) {
  // js 자리
  const StyledAlert = styled.div`
    background-color: ${props => {
      switch (props.type) {
        case "success":
          return "#d4edda";
        case "error":
          return "#f8d7da";
        case "warning":
          return "#fff3cd";
        case "info":
          return "#d1ecf1";
        default:
          return "#e2e3e5";
      }
    }};

    color: ${props => {
      switch (props.type) {
        case "success":
          return "#155724";
        case "error":
          return "#721c24";
        case "warning":
          return "#856404";
        case "info":
          return "#0c5460";
        default:
          return "#383d41";
      }
    }};
    padding: 12px 16px;
    border-radius: 4px;
    margin: 10px 0;
    border: 1px solid transparent;
  `;

  // jsx 자리
  return <StyledAlert type={type}>{children}</StyledAlert>;
}

export default Alert;
