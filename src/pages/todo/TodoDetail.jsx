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
import { Link, useNavigate, useParams } from "react-router-dom";

function TodoDetail({ todoList }) {
  // js 자리
  const navigate = useNavigate();
  // useParams 로 전달 받은 자료는 무조건 문자열입니다.
  const { id } = useParams();
  // 화면에 보여줄 데이터
  const [data, setData] = useState({});

  useEffect(() => {
    // 컴포넌트가 화면에 보일때 한번만 실행하라.
    // 전달 받은 todoList 에서 id 에 해당하는 목록을 뽑아서 보자.
    // filter 사용하면 결과로 배열을 리턴함
    // todoList.filter(item => item.id === id);
    // find 를 사용하면 배열말고 요소가 리턴됨
    const result = todoList.find(item => item.id === parseInt(id));
    if (!result) {
      navigate("/");
    } else {
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
      <Title>할일 {id}글 상세 내용</Title>
      <Section>
        <Form>
          <InputWrap>
            <Label>제목</Label>
            <Input
              value={data.title}
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              readOnly={true}
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              value={data.content}
              name="content"
              rows={4}
              readOnly={true}
            />
          </InputWrap>
          <TodoButtonWrap>
            <Button type="button">
              <Link to={`/edit?id=${id}`}>수정하기</Link>
            </Button>
          </TodoButtonWrap>
        </Form>
      </Section>
    </Container>
  );
}

export default TodoDetail;
