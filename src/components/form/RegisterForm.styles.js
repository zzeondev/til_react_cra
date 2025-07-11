import styled from "@emotion/styled";

// styled 자리
export const FormContainer = styled.div`
  padding: 24px;
  width: 90%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fefefe;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
`;
export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 80px;
  margin-bottom: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
`;
export const RadioInput = styled.input``;

export const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 80px;
  margin-bottom: 8px;
`;
export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
`;
export const CheckBoxInput = styled.input``;

export const SelectGroup = styled.div`
  padding-left: 80px;
  margin-bottom: 8px;
`;
export const SelectList = styled.select`
  width: 100%;
  padding: 4px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #333;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
export const SelectOption = styled.option``;

export const TextAreaGroup = styled.div`
  padding-left: 80px;
  margin-bottom: 8px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 12px;
  border-radius: 8px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #218838;
  }
`;

// 이미지 미리보기 및 파일 업로드 관련
export const UploadImageGroup = styled.div`
  padding-left: 80px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 12px;
`;
export const ImageUpladLabel = styled.label`
  padding: 10px 16px;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const ImageUpladButton = styled.input`
  display: none;
`;
