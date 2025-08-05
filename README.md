# Custom Hook : 커스텀 훅

## 1. Hook 이란?

- 우리나라 말로는 `컴포넌트에서 같이 실행한다`는 의미
- 컴포넌트에 state 와 lifecycle 에 따라서 같이 실행되는 함수
- useState, useEffect, useRef, useMemo, useCallback...
- 개발자도 리액트의 훅처럼 생성이 가능함 (많이 만들어서 활용함)

## 2. Hook 을 만들 때 유의사항

- 동일한 기능을 여러 번 사용한다면 함수를 만들어 보자
- 이렇게 여러 번 활용되는 함수가 만약 컴포넌트에 사용된다면 hook 을 생성해보자

## 3. 폴더 구조 및 함수명 주의

- 일반적으로 `/src/hooks 폴더`를 생성함
- 파일명은 반드시 접두사로 `use함수명.js` 으로 생성해야 리액트에서 인식함
- 반드시 컴포넌트함수 안쪽에 배치를 하여야 함
- if 문 또는 for 문의 안쪽에 배치하지 않아야 작동함

## 4. 간단한 예제

### 4.1. 일반적인 컴포넌트 생성해 보기

- `/src/components/CounterSample.jsx` 파일 생성

```jsx
import { useState } from "react";

function CounterSample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>CounterSample</h1>
      <h2>카운터 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default CounterSample;
```

- App.jsx

```jsx
import CounterSample from "./components/CounterSample";

function App() {
  return (
    <div>
      <CounterSample />
    </div>
  );
}

export default App;
```

### 4.2. 커스텀 훅으로 생성해 보기

- `/src/hooks 폴더` 생성
- `useCounter.js` 파일 생성

```js
import { useState } from "react";

export function useCounter(init = 0) {
  const [count, setCount] = useState(init);
  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);
  return { count, add, minus, reset };
}
```

- /src/components/CounterSample.jsx 적용

```jsx
import { useCounter } from "../hooks/useCounter";

function CounterSample() {
  const { count, add, minus, reset } = useCounter(0);
  return (
    <div>
      <h1>CounterSample</h1>
      <h2>카운터 : {count}</h2>
      <button onClick={add}>증가</button>
      <button onClick={minus}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default CounterSample;
```

## 5. 다양한 예제

### 5.1. 컴포넌트 활용시 Title 출력하기 (새탭 명?)

- /src/hooks/useTitle.js 파일 생성

```js
import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

- App.jsx

```jsx
import CounterSample from "./components/CounterSample";
import { useTitle } from "./hooks/useTitle";

function App() {
  useTitle("첫화면");
  return (
    <div>
      <CounterSample />
    </div>
  );
}

export default App;
```

### 5.2. 토글 커스텀 훅

- /src/hooks/useBoolean.js 파일 생성

```js
import { useState } from "react";

function useBoolean(init = false) {
  const [value, setValue] = useState(init);
  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
export default useBoolean;
```

- App.js

```js
import CounterSample from "./components/CounterSample";
import useBoolean from "./hooks/useBoolean";
import { useTitle } from "./hooks/useTitle";

function App() {
  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean();
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <br />
      <div>
        <h2>테마적용 {value ? "Black" : "white"}</h2>
        <button onClick={toggle}>태마토글</button>
        <button onClick={setTrue}>태마적용</button>
        <button onClick={setFalse}>태마해제</button>
      </div>
    </div>
  );
}

export default App;
```

### 5.3. 안내창 커스텀 훅

- /src/hooks/useMessage.js 파일 생성

```js
export default function useMessage() {
  const showMessage = text => {
    alert(text);
  };
  return showMessage;
}
```

- App.jsx

```jsx
import CounterSample from "./components/CounterSample";
import useBoolean from "./hooks/useBoolean";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";

function App() {
  // js 자리
  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean();
  const showMessage = useMessage();

  // jsx 자리
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <br />
      <div>
        <h2>테마적용 {value ? "Black" : "white"}</h2>
        <button onClick={toggle}>태마토글</button>
        <button onClick={setTrue}>태마적용</button>
        <button onClick={setFalse}>태마해제</button>
      </div>
      <div>
        <button onClick={() => showMessage("반가워요")}>메시지 출력하기</button>
      </div>
    </div>
  );
}

export default App;
```

### 5.4. 윈도우 사이즈 체크 커스텀 훅

- /src/hooks/useWindowSize.js 파일 생성

```js
import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // window.addEventListener("속성", 실행할콜백함수);
    window.addEventListener("resize", handleResize);
    // 클린업 함수 (컴포넌트가 사라지면 자동실행되는 함수)
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return size;
}
```

- App.jsx

```jsx
import CounterSample from "./components/CounterSample";
import useBoolean from "./hooks/useBoolean";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  // js 자리
  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean();
  const showMessage = useMessage();
  const { width, height } = useWindowSize();

  // jsx 자리
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <br />
      <div>
        <h2>테마적용 {value ? "Black" : "white"}</h2>
        <button onClick={toggle}>태마토글</button>
        <button onClick={setTrue}>태마적용</button>
        <button onClick={setFalse}>태마해제</button>
      </div>
      <div>
        <button onClick={() => showMessage("반가워요")}>메시지 출력하기</button>
      </div>
      <br />
      <div>
        <h2>화면 너비 : {width}</h2>
        <h2>화면 높이 : {height}</h2>
      </div>
    </div>
  );
}

export default App;
```

### 5.5. 입력폼 관련 커스텀 훅

- /src/hooks/useInput.js 파일 생성

```js
import { useState } from "react";

export default function useInput(init = "") {
  const [value, setValue] = useState(init);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue(init);
  return { value, onChange, reset };
}
```

- 다양한 입력폼 컴포넌트 만들기
- /src/components/NickNameForm.jsx 파일 생성

```jsx
import useInput from "../hooks/useInput";

function NickNameForm() {
  const name = useInput();
  const handleSubmit = () => {
    alert(name.value);
    name.reset();
  };
  return (
    <div>
      <h2>NickNameForm</h2>
      <input type="text" placeholder="이름을 입력하세요." {...name} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default NickNameForm;
```

- /src/components/AddressForm.jsx 파일 생성

```jsx
import useInput from "../hooks/useInput";

function AddressForm() {
  const address = useInput();
  const handleSubmit = () => {
    alert(address.value);
    address.reset();
  };
  return (
    <div>
      <h2>AddressForm</h2>
      <input type="text" placeholder="주소를 입력하세요." {...address} />
      {/* 
      위와 코드와 같은 결과
      <input
        type="text"
        placeholder="주소를 입력하세요."
        value={address.value}
        onChange={address.onChange}
      /> */}
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default AddressForm;
```

- App.jsx

```jsx
import AddressForm from "./components/AddressForm";
import CounterSample from "./components/CounterSample";
import NickNameForm from "./components/NickNameForm";
import useBoolean from "./hooks/useBoolean";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  // js 자리
  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean();
  const showMessage = useMessage();
  const { width, height } = useWindowSize();

  // jsx 자리
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <br />
      <div>
        <h2>테마적용 {value ? "Black" : "white"}</h2>
        <button onClick={toggle}>태마토글</button>
        <button onClick={setTrue}>태마적용</button>
        <button onClick={setFalse}>태마해제</button>
      </div>
      <div>
        <button onClick={() => showMessage("반가워요")}>메시지 출력하기</button>
      </div>
      <br />
      <div>
        <h2>화면 너비 : {width}</h2>
        <h2>화면 높이 : {height}</h2>
      </div>
      <br />
      <div>
        <h2>입력창 처리</h2>
        <NickNameForm />
        <AddressForm />
      </div>
    </div>
  );
}

export default App;
```

## 6. axios 예제

- /src/hooks/useAxios.js 파일 생성

```js
import axios from "axios";
import { useState } from "react";

// 주소,
// 메소드(Getm Post, Put, Delete, Patch)
// 데이터 (id, 글 등록 자료, 삭제 id...)
export default function useAxios(_url, _method, _payload) {
  // api 회신 결과
  const [data, setData] = useState(null);
  // api 회신 오류 결과
  const [error, setError] = useState(null);
  // api 진행 상태
  const [loading, setLoading] = useState(false);
  // url, method, payload 바뀌면 실행하라
  useEffect(() => {
    // 로딩중 상태로
    setLoading(true);
    // 체크 함수
    const fetchApi = async () => {
      try {
        // 결과 회신값
        let response;
        // 대문자로 변경
        let method = _method.upperCase();
        switch (method) {
          case "GET":
            response = await axios.get(_url);
            break;
          case "POST":
            response = await axios.post(_url, _payload);
            break;
          case "DELETE":
            response = await axios.delete(_url);
            break;
          case "PUT":
            response = await axios.put(_url, _payload);
            break;
          case "PATCH":
            response = await axios.patch(_url, _payload);
            break;
          default:
            throw new Error(`${_method}가 형식이 잘못되었습니다.`);
        }
        // 결과 담기
        setData(response.data);
        // 로딩 종료
        setLoading(false);
      } catch (error) {
        console.Log(error);
        setError(error);
      }

      fetchApi();
    };
  }, [_url, _method, _payload]);

  return { data, error, loading };
}
```
