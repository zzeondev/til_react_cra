# Router 참고 사항

- 현재 모든 jsx 를 불러오는 것은 웹이 느리게 시작되는 원인이 된다.
- `FCP(First Contentful Paint)` 가 느리다는 말이 된다.
- 사용자에게 의미 있는 콘텐츠를 화면에 그리는 시점
- 웹 퍼포먼스 측정 항목 중 하나
- React 앱의 성능 최적화 시 중요한 지표 중 하나
- 동기화로 실시간 로딩으로 분산을 시켜줌.

## 1. lazy

- 문법이 낯설다.

```jsx
import React, { lazy, Suspense } from "react";
```

```jsx
// import Todo from "./Todo";
const TodoPage = lazy(() => import("./Todo"));
```

## 2. Suspense 적용

```jsx
<Route
  path="/"
  // element={<Todo todoList={todoList} handleDelete={handleDelete} />}
  element={
    <Suspense fallback={<div>로딩중...</div>}>
      <TodoPage todoList={todoList} handleDelete={handleDelete} />
    </Suspense>
  }
/>
```

## 3. 라이브러리 활용

- https://www.npmjs.com/package/react-spinners
- https://www.davidhu.io/react-spinners/

### 3.1. npm 설치

```bash
npm i react-spinners
```

```jsx
import styled from "@emotion/styled";
import React from "react";
import { GridLoader } from "react-spinners";
// 전역(window) 자리
const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingDiv() {
  // js 자리

  // jsx 자리
  return (
    <Loading>
      <GridLoader color="#006e81" />
    </Loading>
  );
}

export default LoadingDiv;
```

```jsx
<Route
  path="/"
  // element={<Todo todoList={todoList} handleDelete={handleDelete} />}
  element={
    <Suspense fallback={<LoadingDiv />}>
      <TodoPage todoList={todoList} handleDelete={handleDelete} />
    </Suspense>
  }
/>
```
