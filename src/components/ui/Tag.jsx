import styled from "@emotion/styled";
import React from "react";

function Tag({ children, variant = "default", rounded = false, size = "md" }) {
  // js 자리
  const StyleTag = styled.span`
    display: inline-block;
    background-color: ${props => {
      switch (props.variant) {
        case "success":
          return "#28a745";
        case "warning":
          return "#ffc107";
        case "danger":
          return "#dc3545";
        case "info":
          return "#17a2b8";
        default:
          return "#6c757d";
      }
    }};
    color: #fff;
    border-radius: ${props => (props.rounded ? "10px" : "3px")};
    padding: ${props => (props.size === "lg" ? "6px 12px" : "4px 8px")};
    font-size: ${props => (props.size === "lg" ? "14px" : "12px")};
    margin-right: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
  `;

  // jsx 자리
  return (
    <StyleTag variant={variant} rounded={rounded} size={size}>
      # {children}
    </StyleTag>
  );
}

export default Tag;
