import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  background-color: #fbfbfb;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
export const Section = styled.div`
  margin-bottom: 10px;
`;
export const Form = styled.form`
  position: relative;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  white-space: nowrap;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 12px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: #049365;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
  a {
    color: #fff;
  }
`;

export const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoContent = styled.div`
  font-size: 12px;
`;
export const TodoButtonWrap = styled.div`
  display: flex;
  gap: 3px;
`;

export const TodoListMessage = styled.p`
  text-align: center;
  font-size: 11px;
  color: #ff0000;
  padding: 15px;
`;
