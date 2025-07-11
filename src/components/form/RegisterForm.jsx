import styled from "@emotion/styled";
import React, { useState } from "react";
import InputUi from "./InputUi";
import {
  CheckBoxGroup,
  CheckBoxInput,
  CheckBoxLabel,
  FormContainer,
  FormLabel,
  ImagePreview,
  ImageUpladButton,
  ImageUpladLabel,
  RadioGroup,
  RadioInput,
  RadioLabel,
  SelectGroup,
  SelectList,
  SelectOption,
  SubmitButton,
  TextArea,
  TextAreaGroup,
  UploadImageGroup,
} from "./RegisterForm.styles";

// 전역(windonw) 자리 : 리랜더링에서 배제됨.

function RegisterForm({
  formData,
  errMessage,
  handleChange,
  handleCheckBoxChange,
  handleFilePreview,
  handleDeleteFiles,
  handleSubmit,
}) {
  // js 자리
  // 이미지 미리보기 기능

  const handlePreviewImg = e => {
    const file = e.target.files[0]; // 업로드 해야 하는 파일
    if (file) {
      const 임시주소 = URL.createObjectURL(file);
    }
  };
  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputUi
          id={"user_name"}
          type="text"
          name={"user_name"}
          value={formData.user_name}
          placeholder="아이디를 입력하세요."
          label="아이디"
          onChange={handleChange}
        />
        <InputUi
          id={"user_email"}
          type="email"
          name={"user_email"}
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          label="이메일"
          onChange={handleChange}
        />
        <InputUi
          id={"user_pass"}
          type="password"
          name={"user_pass"}
          value={formData.user_pass}
          placeholder="비밀번호를 입력하세요."
          label="비밀번호"
          onChange={handleChange}
        />
        <InputUi
          id={"user_pass_confirm"}
          type="password"
          name={"user_pass_confirm"}
          value={formData.user_pass_confirm}
          placeholder="비밀번호를 확인해주세요."
          label="비밀번호 확인"
          onChange={handleChange}
        />
        <InputUi
          id={"user_nickname"}
          type="text"
          name={"user_nickname"}
          value={formData.user_nickname}
          placeholder="닉네임을 입력해주세요."
          label="닉네임"
          onChange={handleChange}
        />
        <InputUi
          id={"user_birth"}
          type="date"
          name={"user_birth"}
          value={formData.user_birth}
          placeholder="생년월일을 입력해주세요."
          label="생년월일"
          onChange={handleChange}
        />

        <FormLabel>성별</FormLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"남성"}
              name="user_gender"
              checked={formData.user_gender === "남성"}
              onChange={handleChange}
            />
            남성
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"여성"}
              name="user_gender"
              checked={formData.user_gender === "여성"}
              onChange={handleChange}
            />
            여성
          </RadioLabel>
        </RadioGroup>
        <FormLabel>관심사</FormLabel>
        <CheckBoxGroup>
          {formData.user_interest_default.map((item, index) => (
            <CheckBoxLabel key={index}>
              <CheckBoxInput
                type="checkbox"
                name="user_interest"
                value={item}
                checked={formData.user_interest.includes(item)}
                onChange={handleCheckBoxChange}
              />
              {item}
            </CheckBoxLabel>
          ))}
        </CheckBoxGroup>
        <FormLabel>거주 지역</FormLabel>
        <SelectGroup>
          <SelectList
            id="user_location"
            name="user_location"
            value={formData.user_location}
            onChange={handleChange}
          >
            <SelectOption value="">---지역을 선택해주세요</SelectOption>

            {formData.user_location_default.map((item, index) => (
              <SelectOption value={`${item}`} key={index}>
                {item}
              </SelectOption>
            ))}
          </SelectList>
        </SelectGroup>
        <FormLabel>프로필 이미지</FormLabel>
        <UploadImageGroup>
          {/* 미리보기 이미지 */}
          {/* <ImagePreview src={formData.user_image_preview} /> */}
          {/* {formData.user_image_preview ? <ImagePreview src={formData.user_image_preview} /> : null} */}
          {formData.user_image_preview && (
            <ImagePreview
              src={formData.user_image_preview}
              onClick={handleDeleteFiles}
            />
          )}

          <ImageUpladLabel htmlFor="user_image">이미지 선택</ImageUpladLabel>
          <ImageUpladButton
            type="file"
            accept="image/*"
            id="user_image"
            name="user_image"
            onChange={handleFilePreview}
          />
        </UploadImageGroup>

        <FormLabel>자기소개</FormLabel>
        <TextAreaGroup>
          <TextArea
            id="user_intro"
            name="user_intro"
            rows="4"
            value={formData.user_intro}
            onChange={handleChange}
          />
        </TextAreaGroup>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
