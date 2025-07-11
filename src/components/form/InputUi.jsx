import styled from "@emotion/styled";
import React from "react";
import { InputGroup, InputStyled, Label } from "./InputUI.styles";
// 전역자리 (window) : 리랜더링 반영 안됨.

function InputUi({ id, type, name, value, placeholder, label, onChange }) {
  // js자리

  // jsx 자리
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputUi;
