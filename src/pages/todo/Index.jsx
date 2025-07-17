import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import TodoDetail from "./TodoDetail";
import TodoEdit from "./TodoEdit";
import Layout from "../company/Layout";
import CompanyDetail from "../company/CompanyDetail";
import CompanyList from "../company/CompanyList";
import CompanyLocation from "../company/CompanyLocation";

function Index() {
  // js 자리

  // 전체 목록
  const [todoList, setTodoList] = useState([]);

  // 현재 작성중인 목록
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);

  // uid 를 이용해서 구분한다. (ex.uuid 라이브러리)
  const [uid, setUid] = useState(0);

  // 새로운 할일 등록 함수 생성
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleAddSubmit = () => {
    // 전체 목록 갱신 해주자.
    setTodoList([...todoList, { ...todo, id: uid }]);
    setUid(uid + 1);
    setTodo(initTodo);
  };

  // 수정 Submit 처리하기
  const handleEditSubmit = editItem => {
    console.log(editItem);
    const tempArr = todoList.map(item => {
      if (item.id === editItem.id) {
        return { ...editItem };
      } else {
        return item;
      }
    });
    setTodoList(tempArr);
  };

  // 목록 삭제하기
  const handleDelete = deleteId => {
    const tempArr = todoList.filter(item => item.id !== deleteId);
    setTodoList(tempArr);
  };

  useEffect(() => {
    const result = localStorage.getItem("mind-todo");
    if (!result) {
      localStorage.setItem("mind-todo", JSON.stringify([]));
    } else {
      try {
        const json = JSON.parse(result);
        const check = Array.isArray(json);
        if (check) {
          setTodoList(json);
          setUid(json.length);
        } else {
          setTodoList([]);
          setUid(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mind-todo", JSON.stringify(todoList));
  }, [todoList]);

  // jsx 자리
  return (
    <div className="wrap">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Todo todoList={todoList} handleDelete={handleDelete} />}
          />
          <Route
            path="/add"
            element={
              <TodoAdd
                todo={todo}
                handleAddChange={handleAddChange}
                handleAddSubmit={handleAddSubmit}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<TodoDetail todoList={todoList} />}
          />
          <Route
            path="/edit"
            element={
              <TodoEdit
                todoList={todoList}
                handleEditSubmit={handleEditSubmit}
              />
            }
          />

          {/* 회사소개 */}
          <Route path="/company" element={<Layout />}>
            <Route index element={<CompanyDetail />} />
            <Route path="list" element={<CompanyList />} />
            <Route path="location" element={<CompanyLocation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
