import styled from "@emotion/styled";
import React from "react";

function TodoList({ userid, id, title, completed }) {
  // js
  const TodoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const TodoId = styled.div`
    font-size: 20px;
    color: #999;
    margin-bottom: 15px;
  `;
  const TodoTitle = styled.div`
    font-size: 20px;
    color: #333;
    margin-bottom: 15px;
  `;
  const TodoCompleted = styled.div`
    font-size: 10px;
    color: #333;
    margin-bottom: 20px;
  `;
  // jsx
  return (
    <TodoCard>
      {userid}
      <TodoId>{id}</TodoId>
      <TodoTitle>{title}</TodoTitle>
      <TodoCompleted>{completed}</TodoCompleted>
    </TodoCard>
  );
}

export default TodoList;
