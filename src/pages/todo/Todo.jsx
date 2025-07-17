import React from "react";
import {
  Button,
  Container,
  Section,
  SubTitle,
  Title,
  TodoButtonWrap,
  TodoContent,
  TodoItem,
  TodoListMessage,
} from "./Todo.style";
import { Link, useLocation } from "react-router-dom";

function Todo({ todoList, handleDelete }) {
  const { pathname, search, state } = useLocation();
  console.log(pathname); //     /company/list
  console.log(search); //
  console.log(state); //  null
  return (
    <Container>
      <TodoButtonWrap>
        <Button>
          <Link to={"/add"}>등록하기</Link>
        </Button>
      </TodoButtonWrap>
      <Title>할일 웹 서비스</Title>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <TodoListMessage>등록된 할일이 없습니다.</TodoListMessage>
        ) : (
          todoList.map(item => (
            <TodoItem key={item.id}>
              <TodoContent>
                {item.id}:<Link to={`/detail/${item.id}`}>{item.title}</Link>
              </TodoContent>
              <TodoButtonWrap>
                <Button onClick={() => handleDelete(item.id)}>삭제</Button>
                <Button>
                  <Link to={`/edit?id=${item.id}`}>수정</Link>
                </Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
    </Container>
  );
}

export default Todo;
