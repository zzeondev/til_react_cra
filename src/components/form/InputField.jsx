import styled from "@emotion/styled";
import React from "react";

// 전역 자리
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
const StyledLabel = styled.label`
  font-size: 12px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  min-width: 50px;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

function InputField({ label, type, name, id, value, placeholder, onChange }) {
  // js 자리

  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
