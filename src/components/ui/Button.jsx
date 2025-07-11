import React from "react";
import styled from "@emotion/styled";
function Button({
  children,
  variant = "default",
  size = "md",
  disabled = false,
}) {
  // js 자리
  const Button = styled.button`
    background-color: ${props => {
      // 비활성화 된 경우
      if (props.disabled) return "#ccc";

      switch (props.variant) {
        case "primary":
          return "#007bff";
        case "danger":
          return "#dc3545";
        case "success":
          return "#28a745";
        default:
          return "#6c757d";
      }
    }};

    color: white;
    padding: ${props => (props.size === "lg" ? "12px 24px" : "8px 16px")};
    border: none;
    border-radius: 4px;
    font-size: ${props => (props.size === "lg" ? "18px" : "14px")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin: 5px;
    opacity: ${props => (props.disabled ? 0.6 : 1.0)};

    &:hover {
      opacity: ${props => (props.disabled ? 0.6 : 0.8)};
    }
  `;
  // jsx 자리
  return (
    <Button variant={variant} size={size} disabled={disabled}>
      {children}
    </Button>
  );
}

export default Button;
