import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  InputWrap,
  Label,
  Section,
  TextArea,
  Title,
  TodoButtonWrap,
} from "./Todo.style";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function TodoEdit({ todoList, handleEditSubmit }) {
  // js 자리
  const navigate = useNavigate();
  // 쿼리 스트링을 처리하자.
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id"); // 문자열이다. 숫자로 바꿔야 함.
  // 리액트 변수
  const [data, setData] = useState({});
  // onChange 함수 만들기
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // onSubmit 함수 만들기
  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    // 새로 작성된 내용을 todoLisk 를 업데이터 하도록 하자.
    handleEditSubmit({ ...data });
    navigate("/");
  };

  // 컴포넌트 보일때 한번만 실행하자.
  useEffect(() => {
    // 전달 받은 id 를 이용해서 원하는 내용, 즉 배열의 요소만 추출하자.
    const result = todoList.find(item => item.id === parseInt(id));
    if (!result) {
      // 홈으로 이동
      navigate("/");
    } else {
      // 출력하자.
      setData({ ...result });
    }
  }, []);

  // jsx 자리
  return (
    <Container>
      <TodoButtonWrap>
        <Button>
          <Link to={"/"}>이전</Link>
        </Button>
      </TodoButtonWrap>
      <Title>할일 수정하기</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              value={data.title}
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              onChange={handleChange}
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              value={data.content}
              name="content"
              rows={4}
              onChange={handleChange}
            />
          </InputWrap>
          <TodoButtonWrap>
            <Button type="button">
              <Link to={`/detail/${id}`}>취소</Link>
            </Button>
            <Button type="submit">수정하기</Button>
          </TodoButtonWrap>
        </Form>
      </Section>
    </Container>
  );
}

export default TodoEdit;
