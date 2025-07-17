import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingDiv from "../../components/ui/LoadingDiv";

// 제거해야할 기능
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// import Todo from "./Todo";
// const TodoPage = lazy(() => import("./Todo"));
const TodoPage = lazy(() => sleep(1000).then(() => import("./Todo")));

// import TodoAdd from "./TodoAdd";
const TodoAdd = lazy(() => import("./TodoAdd"));

// import TodoDetail from "./TodoDetail";
const TodoDetail = lazy(() => import("./TodoDetail"));

// import TodoEdit from "./TodoEdit";
const TodoEdit = lazy(() => import("./TodoEdit"));

// import Layout from "../company/Layout";
const Layout = lazy(() => import("../company/Layout"));

// import CompanyDetail from "../company/CompanyDetail";
const CompanyDetail = lazy(() => import("../company/CompanyDetail"));

// import CompanyList from "../company/CompanyList";
const CompanyList = lazy(() => import("../company/CompanyList"));

// import CompanyLocation from "../company/CompanyLocation";
const CompanyLocation = lazy(() => import("../company/CompanyLocation"));

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
            // element={<Todo todoList={todoList} handleDelete={handleDelete} />}
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoPage todoList={todoList} handleDelete={handleDelete} />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoAdd
                  todo={todo}
                  handleAddChange={handleAddChange}
                  handleAddSubmit={handleAddSubmit}
                />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoDetail todoList={todoList} />
              </Suspense>
            }
          />
          <Route
            path="/edit"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <TodoEdit
                  todoList={todoList}
                  handleEditSubmit={handleEditSubmit}
                />
              </Suspense>
            }
          />

          {/* 회사소개 */}
          <Route
            path="/company"
            element={
              <Suspense fallback={<LoadingDiv />}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyDetail />
                </Suspense>
              }
            />
            <Route
              path="list"
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyList />
                </Suspense>
              }
            />
            <Route
              path="location"
              element={
                <Suspense fallback={<LoadingDiv />}>
                  <CompanyLocation />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
